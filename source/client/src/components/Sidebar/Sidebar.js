import React from 'react';

import Chat from '../Chat/Chat.js';

import './Sidebar.css';


export default function Sidebar(){

return(
    <aside className ='sidebar'>
        <section className = 'yourchats_sec'>
            <h2>Your chats</h2>
            <Chat />
            {/* chat component */}
        </section>

        {/* <section className ='yourgroups_sec'>
            <h2>Your groups</h2>
            group component or chat component
        </section> */}

        <section>
            
            {/* profile */}
        </section>

    </aside>
)
}