const { sales } = require('../database/models');

const checkUser = async (checkStatus, status, id, role) => {
  if (role === 'seller' && checkStatus) {
    await sales.update({ status }, { where: { id } });
  }

  if (role === 'customer' && status === 'Entregue') {
    await sales.update({ status }, { where: { id } });
  }
};

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('changeStatus', async ({ id, status, role }) => {
    const arrayStatus = ['Pendente', 'Preparando', 'Em Trânsito'];
    const checkStatus = arrayStatus.includes(status);

    await checkUser(checkStatus, status, id, role);
    const order = await sales.findByPk(id);
    console.log(order.status);
    socket.emit('refreshStatus', order.status);
  });
});
