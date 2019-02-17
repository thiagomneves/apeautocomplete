# APE Autocomplete
Autocomplete lib to fill in other fields

## Dependencies:
 - jQuery

## Usage:

```HTML
<input type="text" id="source">

<input type="text" id="id">
<input type="text" id="email">
<input type="email" id="emailDestination">
```

```javascript
const arrSource = [
    { id: 1, nome: 'Nur Burch', email: 'burch@domain.com' },
    { id: 2, nome: 'Kaden Tate', email: 'tate@domain.com' },
    { id: 3, nome: 'Ahmad Bates', email: 'bates@domain.com' },
    { id: 4, nome: 'Ursula Smyth', email: 'smith@domain.com' },
    { id: 5, nome: 'Maud Gaines', email: 'gaines@domain.com' },
    { id: 6, nome: 'Marta Rutledge', email: 'rutledge@domain.com' },
    { id: 7, nome: 'Boyd Duffy', email: 'duffy@domain.com' },
    { id: 8, nome: 'Lilah Archer', email: 'archer@domain.com' },
    { id: 9, nome: 'Megan Holloway', email: 'holloway@domain.com' },
    { id: 10, nome: 'Patrycja Holloway', email: 'holloway@domain.com' }
];

$('#source').aautocomplete(function () {
    return arrSource; // you can get data from ajax 
}, {
    display: ['nome', 'email'],
    destination: {
    id: 'idDestination', // object attribute: input's id
    email: 'emailDestination'
    }
});
```



