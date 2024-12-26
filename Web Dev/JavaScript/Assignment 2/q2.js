function getValue(character){
    let value;

    switch(character){
        case 'p':
        case 'P':
            value = 'PrepBytes';
                    break;
        case 'Z':
        case 'z':
            value = 'Zenith';
            break;
        case 'E':
        case 'e':
            value = 'Expert Coder';
                break;
        case 'D':
        case 'd':
            value = 'Data Structure';
            break;
        default:
            value = 'Invalid character';
    }    
    return value;
}
        
console.log(getValue('E'));