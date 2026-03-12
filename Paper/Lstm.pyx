import torch
import torch.nn as nn
import torch.nn.functional as F

class WeightDropout(nn.Module):
    def __init__(self, module, weight_p=0.5, layer_names=['weight_hh_l0']):
        super().__init__()
        self.module = module
        self.weight_p = weight_p
        self.layer_names = layer_names
        
        # Save a copy of original weights and remove them from the module
        for layer in self.layer_names:
            w = getattr(self.module, layer)
            self.register_parameter(f'{layer}_raw', nn.Parameter(w.data))
            self.module._parameters.pop(layer)

    def _setweights(self):
        for layer in self.layer_names:
            raw_w = getattr(self, f'{layer}_raw')
            # Apply dropout to the weight matrix itself
            dropped_w = F.dropout(raw_w, p=self.weight_p, training=self.training)
            setattr(self.module, layer, dropped_w)

    def forward(self, *args):
        self._setweights()
        return self.module.forward(*args)
