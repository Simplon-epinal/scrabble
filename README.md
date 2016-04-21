# scrabble

Faites un Fork de ce projet, sur votre compte github.

L' objectif est d' implémenter une fonction de scoring scrabble, afin de donner un score à un mot saisi par un utilisateur, en suivant les spécifications suivantes:

Chaque Lettre a une valeur:

A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10


EXEMPLE:

CHOU aura le score de 9:
3 pour C, 4 pour H, 1 pour o et 1 pour U

/!\ Le mot peut être saisi en majuscules ou minuscules, cela n' a pas d' incidences sur son score


Implementez donc la function score dans lib/scrabble.js en respectant les indications ci-dessus.
Une fois que c' est fait, créez une pull request depuis votre interface github.

/!\ Vous n' avez pas besoin de modifier les tests unitaires existants.

Si votre implémentation est correcte, les tests unitaires passeront et votre pull request sera acceptée.
Si votre pull request est rejetée, vous aurez le détail des tests qui ne seront pas passés. Modifiez votre code, et refaites une pull request, ceci jusqu' à ce que votre pull request soit acceptée!

Bon courage!

