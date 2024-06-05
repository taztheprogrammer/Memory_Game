import Button from "./Button"

export default function Difficulty() {
    return <div style={{
        // border: '1px solid red',
        maxWidth: '500px',
        height: '400px',
        margin: 'auto',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}>
        <h1>Hello pick your difficulty</h1>
        <Button text={'EASY'} color={'green'}></Button>
        <Button text={'MEDIUM'} color={'orange'}></Button>
        <Button text={'HARD'} color={'red'}></Button>
    </div>
}