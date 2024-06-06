import Button from "./Button"

export default function Difficulty({ setDiffSelection, setDiffScreen }) {

    function setDiff(num) {
        setDiffSelection(diffSelection => num)
        setDiffScreen(false);
    }

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
        <Button text={'EASY'} color={'green'} onClick={() => setDiff(6)}></Button>
        <Button text={'MEDIUM'} color={'orange'} onClick={() => setDiff(8)}></Button>
        <Button text={'HARD'} color={'red'} onClick={() => setDiff(12)}></Button>
    </div>
}