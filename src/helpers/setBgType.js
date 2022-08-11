

export const bgCards = (type) => {


  switch (type) {
    case " [ fire ]":
        return {
            backgroundColor: '#fa806d'
        }

    case " [ grass ]":
        return {
            backgroundColor: '#aadd88'
        }

    case " [ water ]":
        return {
            backgroundColor: '#5af'
        }

    case " [ bug ]":
        return {
            backgroundColor: '#ccd572'
        }

    case ' [ normal ]':
        return {
            backgroundColor: '#d9d2d0'
        }

    case ' [ poison ]':
        return {
            backgroundColor: '#c8b'
        }

    case ' [ electric ]':
        return {
            backgroundColor: '#fd7'
        }

    case ' [ ground ]':
        return {
            backgroundColor: '#db5'
        }

    case ' [ fairy ]':
        return {
            backgroundColor: '#f3afef'
        }

    case ' [ fighting ]':
        return {
            backgroundColor: '#bb5544'
        }

    case ' [ psychic ]':
        return {
            backgroundColor: '#f59'
        }

    case ' [ rock ]':
        return {
            backgroundColor: '#ba6'
        }

    case ' [ ghost ]':
        return {
            backgroundColor: '#66a'
        }

    case ' [ ice ]':
        return {
            backgroundColor: '#8fd7ea'
        }

    case ' [ dragon ]':
        return {
            backgroundColor: '#7766ee'
        }

    case ' [ dark ]':
        return {
            backgroundColor: '#6a584c'
        }

    case ' [ steel ]':
        return {
            backgroundColor: '#aaaabb'
        }

    case ' [ flying ]':
        return {
            backgroundColor: '#69f'
        }

    default:
        return {
            backgroundColor: 'white'
        }
}
  }