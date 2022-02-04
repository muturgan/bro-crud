# bro-crud
A simple entity crud

### Steps for an application local lounching:
- Clone this repo :)
- Install dependencies with **npm ci**.
- Create a **.env** file in the project directory and fill it according with the **env.example** file
- Add your entity definition file to the **src/entities** folder
(it already contains the *abonent.entity.ts* example).
You shold use a [typeorm](https://typeorm.io/#/entities) syntax to describe your entity.
Also you can validate incoming values via [class-validator](https://github.com/typestack/class-validator)
(see the *AbonentEntity.kross* field for example).
- Please don't forget that every entity **must** extend a **BaseEntity**.
- Add a *star* export to the **src/entities/index.ts** file like it is done for the *abonent.entity*.
- You can run your application in a develop mode with **npm run dev**. Also you can compile it first with **npm run build** and then launch in with **npm start**.
- Please note that every application restarting after an entity file editing leads to a database schema auto updating.
