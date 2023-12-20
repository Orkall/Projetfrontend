import { Injectable } from '@angular/core';
import { FetcherUserService } from './fetcher-user.service';
import { User } from '../Models/User.model';
import { UserPost } from '../Models/UserPost.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = {
    id: 0,
    pseudo: ''
  };

  constructor(private http: FetcherUserService) {
    this.getUsers();
  }

  listUser: User[] = [
  ];

  // listeFilterOrder: Order[] = this.listOrder;
  listeFilterUser: User[] = [];

  getUsers() {
    this.http.get().subscribe((data) => {
      this.listUser = data;
      this.listeFilterUser = data;
      return this.listUser;
    });
  }

  getUserList() {
    return this.http.get();
  }

  postUser(newUser: UserPost) {
    return this.http.post(newUser)
  }

  getUserConnexion(user : User, userPost : UserPost) {
    // if le pseudo existe alors user = userBdd
    // Sinon appeler le post de l'api
    // Récupérer la liste des utilisateurs pour voir si l'utilisateur venant d'être créer est bien récupérer

    // Faire un get
    this.getUserList().subscribe((users: User[]) => {

      // Chercher dedans si le pseudo existe
      const existingUser = users.find(u => u.pseudo === user.pseudo);

      if (existingUser) {
        this.user = existingUser;
        console.log("Utilisateur récupéré : ", user);
      } else {
        userPost.pseudo = user.pseudo;
        this.postUser(userPost).subscribe(() => {

          // Maintenant que la requête est terminée, recherchez à nouveau l'utilisateur dans la liste
          this.getUserList().subscribe((updatedUsers: User[]) => {
            const newUser = updatedUsers.find(u => u.pseudo === userPost.pseudo);

            if (newUser) {
              // L'utilisateur nouvellement créé a été trouvé, assignez-le à this.user
              this.user = newUser;
              console.log("Utilisateur créé et récupéré : ", user);
            } else {
              console.log("Erreur : Utilisateur non trouvé après la création");
            }
          });
        });
      }
    })
  }

}
