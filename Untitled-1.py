# Initialisation des utilisateurs
admin = Administrateur("Alice", 1, "admin123")
serveur = Serveur("Bob", 2, "serveur123")
chef = ChefDeCuisine("Charlie", 3, "chef123")

# Gestion des utilisateurs
users = {
    "administrateurs": [admin],
    "serveurs": [serveur],
    "chefs": [chef]
}

# Authentification
auth = Authentification(users)
print(auth.se_connecter(1, "admin123"))

# Menu
menu = [Menu(1, "Spaghetti", "Pâtes à la sauce tomate", 12.5, "plat"),
        Menu(2, "Coca", "Boisson gazeuse", 2.5, "boisson")]

# Réservation
reservation1 = Reservation(1, "Jean", 2, "2024-12-15", "20:00", 1)
print(reservation1.afficher_reservation())

# Commande
commande1 = Commande(1, reservation1)
commande1.ajouter_article(menu[0])
print(commande1.afficher_commande())

# Facture
facture1 = Facture(1, commande1)
print(facture1.afficher_facture())
