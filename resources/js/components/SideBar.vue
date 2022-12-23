<template>
    
        <div class="col-lg-2 px-5">
            <h2 class="text-bold-l mt-4 font-circular-std">FILTERS</h2>
            <hr>
            
            <p id="categories" class="cursor-point text-bold-l mb-2 dropdown-toggle" v-b-toggle="'collapse-1'">Genres and Moods</p>
            <b-collapse id="collapse-1" class="mt-2">
            
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Happy-and-Positive">HAPPY AND POSITIVE</a>
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Sad-and-Emotional%C2%A0%F0%9F%98%A5">SAD AND EMOTIONAL</a>
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Cinematic">CINEMATIC</a>
                <a class="dropdown-item nav-item-dropdown mb-0 mt-0 sidebar-dropdown font-circular-std" style="font-size: 14px; font-weight: 500;" href="https://soundstaging.jonathanmann.tech/music/Genres-and-Moods/Horror">HORROR</a>
                                                   
            </b-collapse>
            <p id="good-part-toggle" class="cursor-point text-bold-l mb-2 dropdown-toggle" v-b-toggle="'good-part'" style="margin-top:20px">Start at the Good Part!
            </p>
            <b-collapse id="good-part">
                <label>Off</label>
                    <toggle-button color="rgb(114, 0, 255)"></toggle-button>
                <label>On</label>   
            </b-collapse>
            <p id="vocals-only-toggle" class="cursor-point text-bold-l mb-2 dropdown-toggle" v-b-toggle="'vocals-only'" style="margin-top:20px">Vocals Only</p>
                <b-collapse id="vocals-only">
                    <label>Off</label>
                        <toggle-button color="rgb(114, 0, 255)"></toggle-button>
                    <label>On</label>   
                </b-collapse>

            <p id="bpm-toggle" style="margin-top:20px" v-b-toggle="'bpm'" class="cursor-point text-bold-l mb-2 dropdown-toggle">Speed</p> 
                <b-collapse id="bpm">
                    <div>
                        <b-form-checkbox size="lg" class="checkbox-color">Slow</b-form-checkbox>
                        <b-form-checkbox size="lg" class="checkbox-color">Medium</b-form-checkbox>
                        <b-form-checkbox size="lg" class="checkbox-color">Fast</b-form-checkbox>
                    </div>
                </b-collapse>   
        </div>
    
</template>
  
<script>
  export default {
    name: 'SideBar',
    middleware: 'auth',
  }
   
</script>
  