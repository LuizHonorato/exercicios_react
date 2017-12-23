import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Honorato'>
        <Member name='Luiz'  />
        <Member name='Marina'  />
        <Member name='Fernanda'  />
        <Member name='Maria'  />
    </Family>
, document.getElementById('app'))

