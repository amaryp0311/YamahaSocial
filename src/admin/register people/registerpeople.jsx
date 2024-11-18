import './registerpeople.css'
import People from './people'
import { useState } from 'react'
function Registerpeople() {
    const [peopleList, setPeopleList] = useState([
        { id: 1, name: 'Konarai narakjang', email: 'konarai123@gmail.com', model: 'MT-03 [2024]', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqqa0Qt6vuvd_Rdb3PApvtdcJbjSRpzm06w&s' },
        { id: 2, name: 'Jin Yamada', email: 'jin.yamada@example.com', model: 'YZF-R6 [2023]', imageURL: 'https://cdn-fastly.motorcycle.com/media/2023/02/26/8998702/yamaha-r6-to-continue-racing-in-supersport-next-generation-category.jpg?size=1200x628' },
        { id: 3, name: 'Sara Kimura', email: 'sara.kimura@example.com', model: 'MT-07 [2022]', imageURL: 'https://images.unsplash.com/photo-1499714608240-22fc6c505853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { id: 4, name: 'David Lee', email: 'david.lee@example.com', model: 'Tracer 900 [2021]', imageURL: 'https://images.unsplash.com/photo-1499714608240-22fc6c505853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { id: 5, name: 'Emily Chen', email: 'emily.chen@example.com', model: 'XSR900 [2023]', imageURL: 'https://images.unsplash.com/photo-1499714608240-22fc6c505853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    ]);

    // ฟังก์ชันสำหรับลบ People โดยใช้ id
    const removePerson = (id) => {
        setPeopleList(peopleList.filter(person => person.id !== id));
    };

    return (
        <div>
            <div><h1 className='title-register'>Register People</h1></div>
            <div>
                {peopleList.length === 0 ? (
                    <h2 className='no-people-message'>ไม่มีผู้สมัครในตอนนี้</h2>
                ) : (
                    peopleList.map(person => (
                        <People
                            key={person.id}
                            name={person.name}
                            email={person.email}
                            model={person.model}
                            onRemove={() => removePerson(person.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Registerpeople