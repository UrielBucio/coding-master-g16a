let section_inicio = document.getElementById('inicio');
let section_login = document.getElementById('login');
let section_menu = document.getElementById('menu');
let section_saldo = document.getElementById('saldo');
let section_ingresar = document.getElementById('ingresar');
let section_retirar = document.getElementById('retirar');
let section_result = document.getElementById('result');
let btn_login = document.getElementById('password');
var ing_value = document.getElementById('ingresar_monto');
var ret_value = document.getElementById('retirar_monto');
var flag = 0;
const id_name = document.querySelector('#id_name');
const id_image = document.querySelector('#imagen');
const txt_saldo = document.querySelector('#txt_saldo');
const txt_ing = document.querySelector('#txt_ing');
const txt_ret = document.querySelector('#txt_ret');
const result_items= document.querySelector('#result_items');

class persona {
    constructor (name, password, saldo){
        this.name = name;
        this.password = password;
        this.saldo = saldo;
    }
}

let user_1 = new persona('Gabriel', 'pas123', 250);
let user_2 = new persona('Samuel', 'sam4525', 10);
let user_3 = new persona('Abigail', 'abi_23', 990);

//------------------------------------ Funciones ---------------------------------
function consultar(number) {
    if (number === 1) {
        section_inicio.style.display = 'none';
        section_login.style.display = 'block';
        id_image.innerHTML = '<img src="./src/img/user.png" alt="user1" style="width: 250px;">';
        id_name.innerHTML = `<h3>${user_1.name}</h3>`;
        flag = 1;

    } else if (number === 2) {
        section_inicio.style.display = 'none';
        section_login.style.display = 'block';
        id_image.innerHTML = '<img src="./src/img/user_2.png" alt="user1" style="width: 250px;">';
        id_name.innerHTML = `<h3>${user_2.name}</h3>`;
        flag = 2;
    } else if (number === 3) {
        section_inicio.style.display = 'none';
        section_login.style.display = 'block';
        id_image.innerHTML = '<img src="./src/img/user_3.png" alt="user1" style="width: 250px;">';
        id_name.innerHTML = `<h3>${user_3.name}</h3>`;
        flag = 3;
    }
}

function login() {
    if (flag === 1) {
        if (password.value === user_1.password) {
            section_login.style.display = 'none';
            section_menu.style.display = 'block';
        } else {
            alert('Contraseña incorrecta, intentalo otra vez');
        }
    } else if (flag === 2) {
        if (password.value === user_2.password) {
            section_login.style.display = 'none';
            section_menu.style.display = 'block';
        } else {
            alert('Contraseña incorrecta, intentalo otra vez');
        }
    } else if (flag === 3) {
        if (password.value === user_3.password) {
            section_login.style.display = 'none';
            section_menu.style.display = 'block';
        } else {
            alert('Contraseña incorrecta, intentalo otra vez');
        }
    }
}

function consultar_Saldo() {
    if (flag === 1) {
        section_menu.style.display = 'none';
        section_saldo.style.display = 'block';
        txt_saldo.innerHTML = `<h1>Bienvenido ${user_1.name}</h1><p>El saldo actual en su cuenta es de:</p><strong>$${user_1.saldo}</strong>`;
    } else if (flag === 2) {
        section_menu.style.display = 'none';
        section_saldo.style.display = 'block';
        txt_saldo.innerHTML = `<h1>Bienvenido ${user_2.name}</h1><p>El saldo actual en su cuenta es de:</p><strong>$${user_2.saldo}</strong>`;
    } else if (flag === 3) {
        section_menu.style.display = 'none';
        section_saldo.style.display = 'block';
        txt_saldo.innerHTML = `<h1>Bienvenido ${user_3.name}</h1><p>El saldo actual en su cuenta es de:</p><strong>$${user_3.saldo}</strong>`;
    }
}

function ingresa_Monto() {
    if (flag === 1) {
        if (user_1.saldo < 990) {
            section_menu.style.display = 'none';
            section_ingresar.style.display = 'block';
            txt_ing.innerHTML = `<h1> Bienvenido ${user_1.name}`;
        } else {
            alert('Superaste la maxima cantidad que se puede ingresar');
        }
    } else if (flag === 2) {
        if (user_2.saldo < 990) {
            section_menu.style.display = 'none';
            section_ingresar.style.display = 'block';
            txt_ing.innerHTML = `<h1> Bienvenido ${user_2.name}`;
        } else {
            alert('Superaste la maxima cantidad que se puede ingresar');
        }
    } else if (flag === 3) {
        if (user_3.saldo < 990) {
            section_menu.style.display = 'none';
            section_ingresar.style.display = 'block';
            txt_ing.innerHTML = `<h1> Bienvenido ${user_3.name}`;
        } else {
            alert('Superaste la maxima cantidad que se puede ingresar');
        }
    }
}

function ingresar_Monto() {
    if (flag === 1) {
        user_1.saldo = user_1.saldo + Number(ing_value.value);
        if (user_1.saldo <= 990) {
            section_ingresar.style.display = 'none';
            section_result.style.display = 'block';
            result_items.innerHTML = `<h1>Se ingreso la cantidad de $${ing_value.value} a su cuenta</h1>
            <label>Su nuevo saldo es de: $${user_1.saldo}</label> <section>
            <button class="btn_global_in" onclick="volver_menu()">Volver</button></section>`;
        } else {
            user_1.saldo = user_1.saldo - Number(ing_value.value);
            alert(`No se ingreso correctamente la cantidad, solo puedes ingresar la cantidad de ${990 - user_1.saldo}`);
        }
    } else if (flag === 2) {
        user_2.saldo = user_2.saldo + Number(ing_value.value);
        if (user_2.saldo <= 990) {
            section_ingresar.style.display = 'none';
            section_result.style.display = 'block';
            result_items.innerHTML = `<h1>Se ingreso la cantidad de $${ing_value.value} a su cuenta</h1>
            <label>Su nuevo saldo es de: $${user_2.saldo}</label> <section>
            <button class="btn_global_in" onclick="volver_menu()">Volver</button></section>`;
        } else {
            user_2.saldo = user_2.saldo - Number(ing_value.value);
            alert(`No se ingreso correctamente la cantidad, solo puedes ingresar la cantidad de ${990 - user_2.saldo}`);
        }
    } else if (flag === 3) {
        user_3.saldo = user_3.saldo + Number(ing_value.value);
        if (user_3.saldo <= 990) {
            section_ingresar.style.display = 'none';
            section_result.style.display = 'block';
            result_items.innerHTML = `<h1>Se ingreso la cantidad de $${ing_value.value} a su cuenta</h1>
            <label>Su nuevo saldo es de: $${user_3.saldo}</label> <section>
            <button class="btn_global_in" onclick="volver_menu()">Volver</button></section>`;
        } else {
            user_3.saldo = user_3.saldo - Number(ing_value.value);
            alert(`No se ingreso correctamente la cantidad, solo puedes ingresar la cantidad de ${990 - user_3.saldo}`);
        }
    }
}

function menu_Retirar() {
    if (flag === 1) {
        if (user_1.saldo > 10) {
            section_menu.style.display = 'none';
            section_retirar.style.display = 'block';
            txt_ret.innerHTML = `<h1> Bienvenido ${user_1.name} </h1>`;
        } else {
            alert('No puedes retirar la cantidad, no tienes fondos suficientes');
        }
    } else if (flag === 2) {
        if (user_2.saldo > 10) {
            section_menu.style.display = 'none';
            section_retirar.style.display = 'block';
            txt_ret.innerHTML = `<h1> Bienvenido ${user_2.name} </h1>`;
        } else {
            alert('No puedes retirar la cantidad, no tienes fondos suficientes');
        }
    } else if (flag === 3) {
        if (user_3.saldo > 10) {
            section_menu.style.display = 'none';
            section_retirar.style.display = 'block';
            txt_ret.innerHTML = `<h1> Bienvenido ${user_3.name}</h1>`;
        } else {
            alert('No puedes retirar la cantidad, no tienes fondos suficientes');
        }
    }
}
function retirar_Monto() {
    if (flag === 1) {
        user_1.saldo = user_1.saldo - Number(ret_value.value);
        if (user_1.saldo >= 10) {
            section_retirar.style.display = 'none';
            section_result.style.display = 'block';
            result_items.innerHTML = `<h1>Se retiro la cantidad de $${ret_value.value} de su cuenta</h1>
            <label>Su nuevo saldo es de: $${user_1.saldo}</label> <section>
            <button class="btn_global_in" onclick="volver_menu()">Volver</button></section>`;
        } else {
            user_1.saldo = user_1.saldo + Number(ret_value.value);
            alert(`No se retiro la cantidad debido a la regla de negocio, solo puedes retirar la cantidad de ${user_1.saldo - 10}`);
        }
    } else if (flag === 2) {
        user_2.saldo = user_2.saldo - Number(ret_value.value);
        if (user_2.saldo >= 10) {
            section_retirar.style.display = 'none';
            section_result.style.display = 'block';
            result_items.innerHTML = `<h1>Se retiro la cantidad de $${ret_value.value} de su cuenta</h1>
            <label>Su nuevo saldo es de: $${user_2.saldo}</label> <section>
            <button class="btn_global_in" onclick="volver_menu()">Volver</button></section>`;
        } else {
            user_2.saldo = user_2.saldo + Number(ret_value.value);
            alert(`No se retiro la cantidad debido a la regla de negocio, solo puedes retirar la cantidad de ${user_2.saldo - 10}`);
        }
    } else if (flag === 3) {
        user_3.saldo = user_3.saldo - Number(ret_value.value);
        if (user_3.saldo >= 10) {
            section_retirar.style.display = 'none';
            section_result.style.display = 'block';
            result_items.innerHTML = `<h1>Se retiro la cantidad de $${ret_value.value} de su cuenta</h1>
            <label>Su nuevo saldo es de: $${user_3.saldo}</label> <section>
            <button class="btn_global_in" onclick="volver_menu()">Volver</button></section>`;
        } else {
            user_3.saldo = user_3.saldo + Number(ret_value.value);
            alert(`No se retiro la cantidad debido a la regla de negocio, solo puedes retirar la cantidad de ${user_3.saldo - 10}`);
        }
    }
}
function volver() {
    section_menu.style.display = 'block';
    section_saldo.style.display = 'none';
}
function volver_menu() {
    section_menu.style.display = 'block';
    section_result.style.display = 'none';
}
function logout() {
    section_menu.style.display = 'none';
    section_inicio.style.display = 'block';
}