import React from 'react'

export default function Topic({match}) {
    return (
        <h3>{match.params.topicId}</h3>
    )
}