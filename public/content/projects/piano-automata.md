## Positionality

With over eight years of classical piano practice, I still feel to move rapidly through musical notes very often without enoughly grasping the underlying emotions or engaging in meaningful dialogue with the composer. This positionality has guided through the design process and reflection.

*Reflective Thinking:*

- How can invisible notes be felt and experienced during a performance?
- How can the emotions of a pianist be made tangible and trackable?

## Approaching the Invisible Dynamics of Emotional Resonance with Daily Obeject

![fig 1](../media/projects/02_piano/fig_1.png)

*Objects in Motion as Trigger of Feelings*

Experience empathy through the movements of non-anthropomorphic objects, infusing daily interactions with deeper sensory engagement and emotional resonance. These experiences may come from our own bodies or from our observation of other living beings. [(Design object in motion, Kensho Miyoshi, 2021)](https://www.degruyterbrill.com/document/doi/10.1515/9783035621105/html)

*Emotional Resonance Through Kinesthetic Movement*

Kinesthetic empathy describes the ability to experience empathy merely by observing the movements of another human being. [(Kinesthetic Empathy in Creative and Cultural Contexts, Dee Reynolds, Matthew Reason, 2014)](https://press.uchicago.edu/ucp/books/book/distributed/K/bo12323986.html)

*Designing with Metaphors*

Metaphor is a valuable method in designing meaningful relationships between two distinct entities, which urge us to see things in a new light. [(Handle with care! Why and how designers make use of product metaphors, Paul Hekkert & Nazlı Cila, 2015)](https://doi.org/10.1016/j.destud.2015.06.007)

---

## The Deconstruction and Mutation of Piano

Informed by these design theories and methodological approach, we delved into the invisible dynamics of emotional resonance with daily objects, specifically how the Piano Automata redefines ordinary interaction through motion and empathy. With the **'ghost'** and **'poetry'** metaphors in use, we deconstructed and mutated part of a second-hand piano.

![fig 2](../media/projects/02_piano/fig_2.png)

*Interaction Design*

The ghost pianist invites 'you' for a collaborative performance. Connect by reading the short poem, regardless of eras and realms.

**Step 1** — The piano plays autonomously in a silent tempo.

**Step 2** — 'You' are invited to read the short poem, each verse triggering performance in different tempo.

**Step 3** — By touching 'I DO', you are invited to play a lyrics yourself as response to the ghost pianist.

**Step 4** — The two of you collaboratively perform in an alternative way.

In the 2nd page, the screen's poetry shifts focus to you as the main character, enabling 'you' to play on the keys, which corresponds to the actual key movements. The 'I DO' button is the pianist 'I' questioning 'you,' inviting 'you' to delve into 'my' inner world.

![fig_3](../media/projects/02_piano/fig_3.png)

*System Architecture*

The system was designed and deployed with Unity for front end and Python for back end (hosted by Raspberry Pi), Unity extOSC package for communication, and 13 servos as actuator for the ghost movement.

*Key Functions*

- `handIn(ipaddr, jsonObj)` — Processes connection requests and returns connection status information.
- `command1/2/3(ipaddr, jsonObj)` — Execute commands for mode 1, 2, and 3, respectively; each mode corresponds to the `stop_command()` command.
- `defaultStart()` and `defaultStop()` — Implement the default open and close states during page transitions.
- `chooseWhichKey()` — Activates the corresponding individual piano key when a piano key button is clicked.
- `servoKey()` and `rotate()` — Servo control codes for piano keys and rollers, respectively.
- `responseMessage(ipaddr, jsonObj, error, message)` — Sends response messages to the client side, allowing the Raspberry Pi to execute appropriate actions based on command type and current state.

![fig_4](../media/projects/02_piano/fig_4.png)

---

## Exhibition

Chinese CHI 2023 Art Gallery & Competition, Best Artwork Award and Oral Presentation, Nov 2023

## Collaborator

Yue Zhu, Xiaotong Qiu

## Supervisor

Xiaochen Hu, Tianyi Chen (China Academy of Art)
