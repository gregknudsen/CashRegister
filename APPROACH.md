# General Thoughts/Approach
<hr>

## Tech used

First off, thanks so much for the opportunity to work on this assignment. I opted to use TypeScript, as that's a technology I've started to dive into and level up. Given the time recommendations/constraints (2-5 hours), I ended up building a fairly simple `console` application. The `api` created here, however, could certainly be utilized in a larger web application. 


## Main Approach

1. __Brute force__
   1. I just wanted a quick way to get the change to be calculated and see that in the console. I did accomplish that, however... 
2. _**The Problem with brute force**_
   1. Getting the conventional change amount was never going to be the biggest challenge.
   2. The _random_ change aspect made it clear early on that control flow was going to be needed
3. __The random change effect__
   1. This would be something I would potentially revisit, but I chose to randomize the order of the `usd` array, which contains the name and values of the denominations
   2. Therefore, for every entry from the `.csv` file, the change would (most likely) be parsed using different values 



## TODOS

- Implement web app
  - Either React or Vue would be my preference
- Implement back-end
  - Either Node or .Net
- Implement Tests
- More modularity
- Add ability to change the divisor
- Add international currencies