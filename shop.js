// const AddItemStats = require('./items');
const simplifiedItemsData = require('./items');

function addGold(champion) {
  setInterval(() => {
    champion.status.gold += 2;
  }, 1000);

  setInterval(() => {
    console.log(`Ouro do campeão: ${champion.status.gold}`);

  }, 10000);
}

// Função para comprar itens na loja
function shop(champion, itemId) {
  // Encontrar o item com base no ID fornecido
  const item = simplifiedItemsData.find((item) => item.id === itemId);

  // Verificar se o item existe
  if (!item) {
    console.log('Item não encontrado.');
    return;
  }

  // Salvar o preço original do item
  const originalPrice = item.price;

  // Verificar se há um slot vazio no inventário do campeão
  const emptySlot = Object.entries(champion.items.inventory).find(([slot, value]) => value === '');
  if (!emptySlot) {
    console.log('Inventário cheio. Não é possível adicionar mais itens.');
    return;
  }

  // Inicializar o preço total como o preço original do item
  let totalPrice = originalPrice;

  // Verificar se o item possui receita
  if (item.recipe) {
    // Verificar se o campeão possui todos os itens básicos da receita no inventário
    const hasBasicItems = item.recipe.every((itemId) =>
      Object.values(champion.items.inventory).some((item) => item && item.id === itemId)
    );

    // Se o campeão possuir todos os itens básicos, calcular o preço total do item com base nos itens básicos
    if (hasBasicItems) {
      const basicItemsPrices = item.recipe.map((itemId) => simplifiedItemsData.find((item) => item.id === itemId).price);
      const totalBasicItemsPrice = basicItemsPrices.reduce((total, price) => total + price, 0);
      totalPrice = originalPrice - totalBasicItemsPrice;

      // Remover os itens básicos da receita do inventário do campeão
      item.recipe.forEach((itemId) => {
        const slotToRemove = Object.entries(champion.items.inventory).find(
          ([slot, item]) => item && item.id === itemId
        )[0];
        champion.items.inventory[slotToRemove] = '';
      });
    }
  }

  // Verificar se o campeão possui ouro suficiente para comprar o item
  if (champion.status.gold < totalPrice) {
    console.log('Ouro insuficiente para comprar o item.');
    return;
  }

  // Subtrair o preço total do item do ouro do campeão
  champion.status.gold -= totalPrice;

  // Adicionar o item ao inventário do campeão
  const slot = emptySlot[0];
  champion.items.inventory[slot] = item;

  // addStatsFromItem(champion, itemId);

  // Exibir informações da compra
  console.log(`Item "${item.name}" comprado com sucesso. Ouro restante: ${champion.status.gold}`);
  console.log(`Preço original do item: ${originalPrice}`);
  console.log(`Preço atualizado do item: ${totalPrice}`);
  console.log('Slots atualizados do inventário:');
  console.log(champion.items.inventory);
  // AddItemStats(champion);
}

function sell(champion, slot) {
  const item = champion.items.inventory[`slot${slot}`];

  if (!item) {
    console.log('Slot vazio. Nenhum item para vender.');
    return;
  }

  const itemData = simplifiedItemsData.find((data) => data.id === item.id);

  if (!itemData) {
    console.log('Item não encontrado nos dados do jogo.');
    return;
  }

  const sellPrice = itemData.sellPrice;

  champion.status.gold += sellPrice;
  champion.items.inventory[`slot${slot}`] = '';

  // removeStatsFromItem(champion, itemId);

  console.log(`Item "${item.name}" vendido com sucesso por ${sellPrice} de ouro.`);
  console.log(`Ouro atual do campeão: ${champion.status.gold}`);
  console.log('Slots atualizados do inventário:');
  console.log(champion.items.inventory);
}


// Exportar as funções
module.exports = {
  sell,
  addGold,
  shop
};