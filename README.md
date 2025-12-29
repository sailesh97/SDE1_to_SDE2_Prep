"# SDE1_to_SDE2_Prep" 

- https://www.youtube.com/watch?v=V0pzXU6FbQA
  - https://cookie-tracking.glitch.me/
  - https://new-cookie-times.glitch.me/
- https://www.youtube.com/watch?v=GhrvZ5nUWNg
- Star rating
- Namaste JS
- Start practicing machine coding questions
- Local VSCode IDE setup for faster code writing in interviews:
-   - Code Snippets (RFC), Rename tag plugin\
- React19
- React Scripts deprecated as CRA deprecated, Alternative?
- Why do we do CRA Eject in MRV Orders
- https://www.freecodecamp.org/news/how-microfrontends-work-iframes-to-module-federation/

### In Progress
1. Nested Checkbox Implementation:
1.1. Failed because:
   - Couldn't think of data structure in which the checkbox state should be stored
   - Updating state of child nodes is relatively easy than updating parent's state.
   - I thought, it should be solved using tree traversal algo. But recursion was easier approach. Tree traversal wasn't required
  
2. Star Rating: Completed
3. Table:
   3.1 Understood how to implement using render props
   3.2 TODO: Yet to implement using html table tags, as doing it in material is increasing complexity
   3.3 TODO: Read from articles about benefits of renderProps

4. Overlapping circles: devtools.tech
  4.1 onMouseDown
  4.2 onMouseMove
  4.3 onMouseUp
  4.4 addEventListener('contextmenu'): prevent default
  4.5 e.target.buttons:2 means right click and 1 means left click
  4.6 clientX, clientY is the co-ordinates when mouse click happened
  4.7 where mouse is relased, means onMouseUp event triggered, in that event handler we can calculate x & y distance travelled and assign it to top & left property of abosolutely positioned circle.
  4.8 distance between two centers > (radius1 of c1 + radius2 of c2) : circles are not overlapping
  4.9 Maintain a state to determine whether circle is active. Means which circle was drawn last.
