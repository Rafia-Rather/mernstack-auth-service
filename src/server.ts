function welcome(name: string) {
    console.log('welcome ' + name)

    const user = {
        name: 'Rafia',
    }

    const fname = user['name']
    return name + fname
}

welcome('Rafia')
