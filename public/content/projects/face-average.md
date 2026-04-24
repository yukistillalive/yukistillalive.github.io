## About

A speculative interactive experience that invites you to discover how similar your face is to the "average" face of famous artists as a playful provocation against the abuse of algorithm.

## Concept

What does an "artist" look like? Automatic system gives you the answer.

By computing morphological averages across corpora of canonical artists, the project reveals how cultural categories solidify into physiognomy -- and uses your face as the mirror. The similarity score arrives with deliberately ambiguous framing, inviting reflection on what the comparison means, and what it refuses to mean.

## Interaction

Participants can interact though a live camemera where no data is collected. We build a (small) dataset of artist faces from public avaible and authorized sources (teachers at China Academy of Art), using StyleGAN to synthesize an average artist face from the corpus. Runway's pre-trained Face Landmarks detection model extracts facial keypoints for the generated average face and the participant's face. The audience image is transmitted to Processing in real time via the OSC protocol, where we compare landmark coordinates using Euclidean distance and compute a similarity score against the artist average. The result is rendered as an abstract facial pattern rather than a literal portrait.

All portrait datasets used for training were public avaible and authorized, and deleted after training. The faces shown in the installation are generated images, not real portraits, and any resemblance to real individuals is coincidental.

## Exhibition

Chinese CHI 2023 Art Gallery & Competition, Nov 2023;

Kunpeng Global Design Award (KPA), Digital Design Track, Excellence Award, Apr 2024

## Collaborator

Yue Zhu, Xiaotong Qiu

## Supervisor

Xiaochen Hu, Tianyi Chen (China Academy of Art)