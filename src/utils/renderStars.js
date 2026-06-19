function renderStars(note){
        const maxStars = 5;
        const fullStars = Math.floor(note);
        const hasHalfStar = note % 1 >= 0.5;

        const stars = [];

        for(let i = 0; i < maxStars; i++){
            if(i < fullStars){
                stars.push("full");
            }else if (i === fullStars && hasHalfStar) {
                stars.push("half");
            }else {
                stars.push("empty");                    
            }
        }

        return stars;
}

export default renderStars;