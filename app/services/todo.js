import Eos from 'eosjs';
import { httpEndpoint } from 'config/constants';

const eos = Eos({ httpEndpoint });
let chainId = null;

console.log('eos', eos);

eos.getInfo({}).then((res) => {
  chainId = res.chain_id;
});

function getNewEoS() {
  return Eos({
    keyProvider: '5K2pmE9QU61Cb5c5yjcoKq3RidaE4DQRwGKHDNayja9v2EhypPk',
    httpEndpoint,
    chainId
  });
}


export function getTodoFromChain() {
  return eos.getTableRows(true, 'netametatest', 'netametatest', 'todos');
}

export function addTodoToChain({ id, name }) {
  const newEos = getNewEoS();
  return newEos.transaction(
    {
      actions: [
        {
          account: 'netametatest',
          name: 'addtodo',
          authorization: [{
            actor: 'netametatest',
            permission: 'owner'
          }],
          data: { id, name }
        }
      ]
    }
  )
}


export function updateTodoInChain({ id, name, done }) {
  const newEos = getNewEoS();
  return newEos.transaction(
    {
      actions: [
        {
          account: 'netametatest',
          name: 'updatetodo',
          authorization: [{
            actor: 'netametatest',
            permission: 'owner'
          }],
          data: { id, name, done: done ? 1 : 0 }
        }
      ]
    }
  )
}

export function removeTodoFromChain(id) {
  const newEos = getNewEoS();
  return newEos.transaction(
    {
      actions: [
        {
          account: 'netametatest',
          name: 'removetodo',
          authorization: [{
            actor: 'netametatest',
            permission: 'owner'
          }],
          data: { id }
        }
      ]
    }
  )
}

export function confirmTransactionOnChain({ transactionId, blockId }) {
  const newEos = getNewEoS();
  return newEos.getTransaction(transactionId, blockId);
}
