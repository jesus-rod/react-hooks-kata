import React, { useState } from 'react'

export const RulesOfHooks: React.FC<RulesOfHooksProps> = ({}) => {

    const App = () => {
        // Do ✅
        const [age, setAge] = useState(0)
        const [name, setName] = useState('Juha Tauriainen')
      
        // Don't 🚫
        // this does not work!
        if ( age > 10 ) {
          
          const [foobar, setFoobar] = useState(null)
        }
      
        // also this is not good
        for ( let i = 0; i < age; i++ ) {
          const [rightWay, setRightWay] = useState(false)
        }

        // and this is also illegal
        const notGood = () => {
          const [x, setX] = useState(-1000)
        }
      
        return (
          <div>
              Better follow the rules! 
          </div>
        )
      }
}