**_HOW TO USE SMEE v.1_**

**What is SMEE?**
SMEE stands for State-management Made Extra Easy; meaning the amount of work you as a user of our library has to do is lessened greatly in comparison to other State-management options.\*

**Why use SMEE?**
We offer a simple, easy to use React hook to access, modify, and display your apps state in any component, on any level. Globably.

**Wow! Color me impressed. How did you manage to--**
Don't ask how we did it.

**Okay... Anyway... Why Hooks?**
Great question! To answer that, I'll need to give you a little refresher on what Hooks are. Hooks are a bleeding-edge React feature allowing you to 'hook' into any component using the hooks they provide, removing the need to prop drill and allowing functional components to shine. They both simplify the amount of code needed to write, and better improve readability as a user entering the codebase.
So, with that in mind, we chose to use hooks due to the ease of writing for a user; _you_, and the removal of abstractions. With hooks like useState that, you guessed it, use the state, you are able to build custom hooks that do exactly what it says on the tin.

**Okay, okay... So how do I get started?**
About time, right? Okay... First, download our package. Install it. Got that? Good. Next up, write out some functional components you may use. Go on... You know how to do that, right? Here... Use this one.

(simple adding counter)

Now, in place of your 'useState' hook, use our 'useStore'! But hold on... It doesn't work EXACTLY like the 'useState' hook... The syntax is a little different. (THIS IS THE CURRENT ITERATION, EVERYTHING IS SUBJECT TO CHANGE) The 'useStore' hook allows for two inputs; the name of the state as a string, and the value of that state. If you include the value, it will assume you are attempting to alter the value, or add a new value if the input string does not exist as a piece of state in the global store. So, let's say we want to add a counter state that our counting component will alter. We would type the following:

const count = useStore("counter", 0);

And bam! Just like that, a global piece of state is added to the global store. Wanna use it? Cool! the useStore provided us with the value that was either created or pulled out from the global store.

Now if you modify that value, it'll update the global store and re-render!\*\* Where you do that is up to you. Wanna do it right in your component? Go for it! Wanna do it on a separate page? Go for it! Make a reducer page that will handle all the logic, pass it these values and alter them there. It's that easy!

**Oh my god! You guys are really changing the game... You could say that this really is The Future of State-management, Today!**
Yeah. We know. Subsequently, if you happen to have work... We are all out of jobs.

**Oh! Uh... Yeah.. Thanks for making this!**
You're welcome.

\*other libraries may be able to accomplish something similar, however differently

\*\*yeah I got no clue if this shit will actually work
