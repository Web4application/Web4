# Activation Regularization (AR)
AR penalizes 

the 
L
2
𝐿
2
 norm of the raw activations. It encourages the model to avoid excessively large hidden states, which can lead to instability or overfitting.

L
A
R
=
α
⋅
L
2
(
m
⊙
h
t
)
𝐿
𝐴
𝑅
=
𝛼
⋅
𝐿
2
(
𝑚
⊙
ℎ
𝑡
)

h
t
ℎ
𝑡
: The output (hidden state) of the RNN at time step 
t
𝑡
.

m
𝑚
: The dropout mask applied to the output.

α
𝛼
: A scaling coefficient (hyperparameter). 
GitHub
GitHub
2. Temporal Activation Regularization (TAR)
TAR penalizes the difference between consecutive hidden states. This acts as a "slowness" regularizer, forcing the model to produce stable transitions and preventing sudden, large changes in the internal representation.

L
T
A
R
=
β
⋅
L
2
(
h
t
−
h
t
+
1
)
𝐿
𝑇
𝐴
𝑅
=
𝛽
⋅
𝐿
2
(
ℎ
𝑡
−
ℎ
𝑡
+
1
)

h
t
,
h
t
+
1
ℎ
𝑡
,
ℎ
𝑡
+
1
: Successive hidden states.

β
𝛽
: A scaling coefficient (hyperparameter). 

