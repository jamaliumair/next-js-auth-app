type HobbiesType = {
    hobbies?: string[]
}

export default function Hobbies({hobbies}: HobbiesType) {
    return (
        <>
        <h2>Your Hobbies</h2>
        <ul>
        {hobbies?.map((hobbie, index) => (
            <li key={hobbie + index}>{hobbie}</li>
        ))}
        </ul>
        </>
    )
}