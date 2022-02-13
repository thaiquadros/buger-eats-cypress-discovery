var faker = require('faker')

export default{

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
                name: `${firstName} ${lastName}`,
                cpf: '00000078911',
                email: faker.internet.email(firstName).split('@')[0]+'@mailinator.com',
                whatsapp: '11987965423',
                address: {
                    postalcode: '20771001',
                    street: 'Avenida Dom Hélder Câmara',
                    number: '3565',
                    details: '601',
                    district: 'Cachambi',
                    city_state: 'Rio de Janeiro/RJ'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
            }

            return data
    }
}