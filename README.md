# TIN project

This is Planet Builder v0.0.3 project, where anybody can be a part of our planet creators community:)

## Demo 

![tutorial.gif](tutorial.gif)

...

## Quickstart

The simples and fastest way to run the app is just open the folder and run:

```
cd tin-proj
docker compose up -d --build
```

The app will be available at:
- http://localhost:8080/ - frontend
- http://localhost:3000/ - backend

## Seeding

To create tables and seed all the data:

```
docker exec -it tin-proj-backend-1  bash -c "node src/initializeDb.js && node src/seeders/rolesSeeder.js && node src/seeders/categoriesSeeder.js && node src/seeders/usersSeeder.js && node src/seeders/planetsSeeder.js && node src/seeders/boostsSeeder.js"
```

## Get in

Enter the backend container
```
docker exec -it tin-proj-backend-1 bash
```

Enter the database container
```
docker exec -it tin-proj-db-1 psql -U user mydatabase
```
