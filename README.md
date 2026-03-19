---
pretty_name: "web4-The intelligence web"
license: mit
language:
- en
library_name: datasets
size_categories:
- 100K<n<1M
task_categories:
- text-generation
- question-answering
- any-to-any
tags:
- text
- 3d
- image
- synthetic
- agentic
- reasoning
- RAG
- system-2
- chain-of-thought
- web-search
- document
- edge-ai
- tool-use
- software
- engineering
- code
- legal
- medical
- healthcare
- biology
- chemistry
- finance
- science
- climate
- art
- design
- music
- audio
- video
- agent
- datasets
- parquet
- pandas
- polars
- dask
dataset_info:
  features:
  - name: batch_index_id
    dtype: int64
  - name: role
    dtype: string
  - name: industry
    dtype: string
  - name: os
    dtype: string
  - name: user_prompt
    dtype: string
  - name: agent_reasoning
    dtype: string
  splits:
  - name: train
    num_bytes: 712900000
    num_examples: 263098
configs:
- config_name: default
  data_files:
  - split: train
    path: "edge_reasoning_train_*.parquet"
---
