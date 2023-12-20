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
    });
  }

  getUserList() {
    return this.http.get();
  }

  postUser(newUser: UserPost) {
    return this.http.post(newUser)
  }

  getUserConnexion(user : User, userPost : UserPost) {
    // Récupérer tous les utilisateurs en bdd
    this.getUserList().subscribe((users: User[]) => {

      // Chercher dedans si le pseudo existe et le stocker dans la variable existingUser
      const existingUser = users.find(u => u.pseudo === user.pseudo);

      // Si l'utilisateur existe alors on l'enregistre dans la variable user créer dans ce service 
      // Sinon on le créer en bdd, puis on refait un getAll de tous les utilisateurs pour l'enregistrer dans la variable user créer dans ce service 
      if (existingUser) {
        this.user = existingUser;
        // console.log("Utilisateur récupéré : ", this.user);
      } else {
        userPost.pseudo = user.pseudo;
        this.postUser(userPost).subscribe(() => {

          // GetAll Users
          this.getUserList().subscribe((updatedUsers: User[]) => {

            // Chercher dedans si le pseudo existe et le stocker dans la variable newUser
            const newUser = updatedUsers.find(u => u.pseudo === userPost.pseudo);

            if (newUser) {
              this.user = newUser;
              // console.log("Utilisateur créé et récupéré : ", this.user);
            } else {
              // console.log("Erreur : Utilisateur non trouvé après la création");
            }
          });
        });
      }
    })
  }

}
