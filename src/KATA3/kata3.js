/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
const serieFibonacci = (number) =>{
    let number1=0;
    let number2=0;
    let number3=0;
    if(number>0){
        for (let i=0;i<number;i++) {
            if(i>1){
                
                number3=number2+number1;
                console.log(number3)
                number1=number2;
                number2=number3;
            }
            else{
                number2=i;
                number3=number1+number2;
                console.log(number3);
                
                
            }
        }
    }
    else{
        console.log('El numero debe ser mayor a 0');
    }
    
}

serieFibonacci(50);
