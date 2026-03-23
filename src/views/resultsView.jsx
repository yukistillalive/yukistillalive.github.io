export function ResultsView(props) {
    console.log("ResultsView props:", props.model.cards, props.model.readingResult);
    return "ResultsView stub: " + props.model.readingResult.length + " results" + JSON.stringify(props.model.readingResult);
}