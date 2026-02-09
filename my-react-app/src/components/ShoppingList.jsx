import ShoppingItem from "./ShoppingItem";

/*
  Todos-komponenten har ansvar for å håndtere
  og vise en samling med todo-oppgaver.
*/
export default function ShoppingList({shoppingItems})

    /*
      Dette er en liste med todo-objekter.
      Hvert objekt representerer én oppgave og inneholder:
      - id: unik identifikator (viktig når man renderer lister i React)
      - title: kort tittel på oppgaven
      
      Vi bruker en array for å enkelt kunne jobbe med flere todos.
    */
    return (
        <section className="flex-r">
            <h2>Handleliste</h2>
            {/*
              Her renderer vi Todo-komponenten.
              Tanken er at Todo-komponenten skal brukes til
              å vise én enkelt todo.
               Senere kan vi bruke todoItems-arrayet sammen
              med map() for å sende data til Todo-komponenten
              via props og vise alle oppgavene dynamisk.*/
            
            {shoppingItems.map((item) => <ShoppingItem key={item.id} title={item.title} id={item.id} setShoppingList={setShoppingList} />)}}
        </section>
    )
}