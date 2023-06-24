import React from 'react'
import imagen1 from '../assets/java.jpg'
import imagen2 from '../assets/When_to_Consider_Using_Node_js_0d84032172.jpg'
import imagen3 from '../assets/los-mejores-lenguajes-de-programacion-en-el-desarrollo-web-y-su-importancia-en-la-era-digital.jpg'
import Card from './Card'
    const cards = [
        {
           id: 1,
           title: 'Java',
           image: imagen1,
           instructor: "Agustin Meza"

        },
        {
            id: 2,
            title: 'Node',
            image: imagen2,
            instructor: "Sheila Nava"
 
         },
         {
            id: 3,
            title: 'Desarrollo WEB',
            image: imagen3,
            instructor: "Luis Guerrero"
 
         }, 
    ]

export default function Cards(){
      console.log(cards)
  return(
    <div className='container d-flex justify-content-center aling-item-center h-100'>
        <div className='row'>
        {
        cards.map( c=> (
            <div className='col-md-4' key={cards.id}>
            <Card
            key={c.id}
            id={c.id}
            title={c.title}
            image={c.image}
            instructor={c.instructor}
            />
            </div>
         ))
        }
        </div>
        </div>
  )
}
