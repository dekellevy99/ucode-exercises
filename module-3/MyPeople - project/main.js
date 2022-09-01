(function(){
    const generatePople = function(response){
        const people = response.results.map(person => {return {name: `${person.name.first} ${person.name.last}`,
                                                               email: person.email,
                                                               id: person.id.value}});
        
        let source = $("#people-template").html();
        let template = Handlebars.compile(source);
        let peopleCards = template({people: people});
        $("#people-container").append(peopleCards);
                                                      
    }
    
    const getPeople = function(){
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?format=JSON&results=13',
            success: generatePople,
            error: function(xhr, text, error){
                console.log("it seems to be an issue with the request")
            }
        })
    }
    
    getPeople();
})();


