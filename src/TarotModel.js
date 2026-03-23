export const model = {
  // Model Fields
  currentUser: null, // logged-in user object
  cards: [], // list of cards currently loaded from API by search
  random10Cards: [], // list of 10 random cards for library view
  currentCardId: [], // which card user clicked last
  readingResult: null, // interpreted divination output for one session
  history: [], // array of past readings (array or object?)
    
  searchParams: {},
  searchResultsPromiseState: {},
  currentCardPromiseState: {},
 
  // Model Methods
  setUser(user) { this.currentUser = user; }, // updates auth state after login/logout.
  setCards(cards) { this.cards = cards; }, // replaces current card list after fetch/search.
  selectCard(id) { this.selectedCardId = id; }, // stores selected card for navigation/detail
  setResult(result) { this.readingResult = result; }, // stores latest divination output
  addHistory(item) { this.history = [item, ...this.history]; }, //add a new record to history
};
