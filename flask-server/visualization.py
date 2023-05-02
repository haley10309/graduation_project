# import matplotlib.pyplot as plt
# import numpy as np
# import py3Dmol

# # Color bands for visualizing plddt
# PLDDT_BANDS = [(0, 50, '#FF7D45'),
#                (50, 70, '#FFDB13'),
#                (70, 90, '#65CBF3'),
#                (90, 100, '#0053D6')]


# def pymol_visualization():
    
# # --- Visualise the prediction & confidence ---
#     show_sidechains = True
#     def plot_plddt_legend():
#     # """Plots the legend for pLDDT."""
#     thresh = ['Very low (pLDDT < 50)',
#             'Low (70 > pLDDT > 50)',
#             'Confident (90 > pLDDT > 70)',
#             'Very high (pLDDT > 90)']

#     colors = [x[2] for x in PLDDT_BANDS]

#     plt.figure(figsize=(2, 2))
#     for c in colors:
#     plt.bar(0, 0, color=c)
#     plt.legend(thresh, frameon=False, loc='center', fontsize=20)
#     plt.xticks([])
#     plt.yticks([])
#     ax = plt.gca()
#     ax.spines['right'].set_visible(False)
#     ax.spines['top'].set_visible(False)
#     ax.spines['left'].set_visible(False)
#     ax.spines['bottom'].set_visible(False)
#     plt.title('Model Confidence', fontsize=20, pad=20)
#     return plt

#     # Show the structure coloured by chain if the multimer model has been used.
#     if model_type_to_use == notebook_utils.ModelType.MULTIMER:
#     multichain_view = py3Dmol.view(width=800, height=600)
#     multichain_view.addModelsAsFrames(to_visualize_pdb)
#     multichain_style = {'cartoon': {'colorscheme': 'chain'}}
#     multichain_view.setStyle({'model': -1}, multichain_style)
#     multichain_view.zoomTo()
#     multichain_view.show() 

#     # Color the structure by per-residue pLDDT  
#     color_map = {i: bands[2] for i, bands in enumerate(PLDDT_BANDS)}
#     view = py3Dmol.view(width=800, height=600)
#     view.addModelsAsFrames(to_visualize_pdb)
#     style = {'cartoon': {'colorscheme': {'prop': 'b', 'map': color_map}}}
#     if show_sidechains:
#     style['stick'] = {}
#     view.setStyle({'model': -1}, style)
#     view.zoomTo()

#     grid = GridspecLayout(1, 2)
#     out = Output()
#     with out:
#     view.show()
#     grid[0, 0] = out

#     out = Output()
#     with out:
#     plot_plddt_legend().show()
#     grid[0, 1] = out

#     display.display(grid)

#     # Display pLDDT and predicted aligned error (if output by the model).
#     if pae_outputs:
#        num_plots = 2
#     else:
#        num_plots = 1

# plt.figure(figsize=[8 * num_plots, 6])
# plt.subplot(1, num_plots, 1)
# plt.plot(plddts[best_model_name])
# plt.title('Predicted LDDT')
# plt.xlabel('Residue')
# plt.ylabel('pLDDT')

# if num_plots == 2:
#   plt.subplot(1, 2, 2)
#   pae, max_pae = list(pae_outputs.values())[0]
#   plt.imshow(pae, vmin=0., vmax=max_pae, cmap='Greens_r')
#   plt.colorbar(fraction=0.046, pad=0.04)

#   # Display lines at chain boundaries.
#   best_unrelaxed_prot = unrelaxed_proteins[best_model_name]
#   total_num_res = best_unrelaxed_prot.residue_index.shape[-1]
#   chain_ids = best_unrelaxed_prot.chain_index
#   for chain_boundary in np.nonzero(chain_ids[:-1] - chain_ids[1:]):
#     if chain_boundary.size:
#       plt.plot([0, total_num_res], [chain_boundary, chain_boundary], color='red')
#       plt.plot([chain_boundary, chain_boundary], [0, total_num_res], color='red')

#   plt.title('Predicted Aligned Error')
#   plt.xlabel('Scored residue')
#   plt.ylabel('Aligned residue')
