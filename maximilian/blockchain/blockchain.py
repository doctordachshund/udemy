blockchain = []


def get_last_blockchain_value():
    return blockchain[-1]


def add_value(transaction_amount, last_transaction=[1]):
    blockchain.append([last_transaction, transaction_amount])


def get_user_input():
    return float(input('Your transaction amount please: '))


tx_amount = get_user_input()
add_value(tx_amount)


while True:
    tx_amount = get_user_input()
add_value(tx_amount, get_last_blockchain_value())


for block in blockchain:
    print('Outputting Block')
    print(block)

print('Done!')