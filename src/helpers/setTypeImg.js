


export const setTypeImg = (type) => {

    switch (type) {
        case " [ fire ]":
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_7.jpg" alt="fire"  key={type}/>
    
        case " [ grass ]":
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_12.jpg" alt="grass" key={type}/>
    
        case " [ water ]":
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_2.jpg" alt="water" key={type}/>
    
        case " [ bug ]":
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_3.jpg" alt="bug" key={type}/>
    
        case ' [ normal ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_11.jpg" alt="normal" key={type}/>
    
        case ' [ poison ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_17.jpg" alt="poison" key={type}/>
    
        case ' [ electric ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_5.jpg" alt="electric" key={type}/>
    
        case ' [ ground ]':
            
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_16.jpg" alt="gruond" key={type}/>
    
        case ' [ fairy ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_8.jpg" alt="fairy" key={type}/>
    
        case ' [ fighting ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_10.jpg" alt="fighting" key={type}/>
    
        case ' [ psychic ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_13.jpg" alt="psychic" key={type}/>
    
        case ' [ rock ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_14.jpg" alt="rock" key={type}/>
    
        case ' [ ghost ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_6.jpg" alt="ghost" key={type}/>
    
    
        case ' [ ice ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_9.jpg" alt="ice" key={type}/>
    
        case ' [ dragon ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_4.jpg" alt="dragon" key={type}/>
    
        case ' [ dark ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_15.jpg" alt="dark" key={type}/>
    
        case ' [ steel ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_1.jpg" alt="steel" key={type}/>
    
        case ' [ flying ]':
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_18.jpg" alt="flying" key={type}/>
    
        default:
          return <img src="https://media.vandal.net/m/6-2021/20216312412377_1.jpg" alt="" key={type}/>
      }
}


