import os
c = os.getcwd()
c = os.path.join(c, 'server')
c = os.path.join(c, 'public')
c = os.path.join(c, 'images')
finc = os.path.join(c, 'bears')



beardir = os.listdir(finc)
print(beardir)
bear_dir = ['ali-kazal-EuFaKKUipnY-unsplash.jpg', 'anna-tremewan-m5VNu667zqE-unsplash.jpg', 'annie-spratt-cXj-o6sacZo-unsplash.jpg', 'annie-spratt-o1bnhassePU-unsplash.jpg', 'anthony-renovato-6HxC-fZjlI0-unsplash.jpg', 'anvesh-baru-2ZXrBR4ByAQ-unsplash.jpg', 'ba.jpg', 'bao-menglong-6L7-GuSewHo-unsplash.jpg', 'bb.jpg', 'ben-owen-VOs0piDVXr4-unsplash.jpg', 'brendon-smith-ubN7WTuEO8w-unsplash.jpg', 'brian-mcmahon-eW0I8UA82Wk-unsplash.jpg', 'celine-chamiot-poncet--W5lbMU5Dak-unsplash.jpg', 'chris-curry-GYpsSWHslHA-unsplash.jpg', 'damian-patkowski-A57EhRpsvyI-unsplash.jpg', 'daniel-diesenreither-z4yzSsH5EAo-unsplash.jpg', 'daniel-krueger-M2xxvhaBw_I-unsplash.jpg', 'danika-perkinson-DOjL1PKKZ2I-unsplash.jpg', 'debbie-molle-6DSID8Ey9-U-unsplash.jpg', 'delaney-van-CmK2cSIqYhI-unsplash.jpg', 'donna-ruiz-Pe_SZd-oA_0-unsplash.jpg', 'federico-di-dio-photography-WvwH82-uX_Q-unsplash.jpg', 'girl-with-red-hat-MU29RODVxeE-unsplash.jpg', 'hans-jurgen-mager-CHqbiMhQ_wE-unsplash.jpg', 'hans-jurgen-mager-Ec_ygZTIv_0-unsplash.jpg', 'hans-jurgen-mager-LVT82myoXSE-unsplash.jpg', 'hans-jurgen-mager-NL1vH0hnIbQ-unsplash.jpg', 'hans-jurgen-mager-p2xEnIZAv1E-unsplash.jpg', 'hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg', 'hans-veth-CcfBWusGh-s-unsplash.jpg', 'hans-veth-T5bcvBRHv_E-unsplash.jpg', 'janko-ferlic-k2DVsB4hTBQ-unsplash.jpg', 'janko-ferlic-ypS9j3UzqLk-unsplash.jpg', 'jessica-weiller-kZ8dyUT0h30-unsplash.jpg', 'julien-juanola-pWsnEXmpqLA-unsplash.jpg', 'kushagra-saxena-GC2pFdjnFig-unsplash.jpg', 'leila-boujnane-g3GwD84lpg0-unsplash.jpg', 'mana5280--T8J7uA2wBw-unsplash.jpg', 'mana5280-7AEALf1Im8I-unsplash.jpg', 'mana5280-sQcIc_FJQkQ-unsplash.jpg', 'mana5280-X2beqDsHPpI-unsplash.jpg', 'marco-pagano-4t_qjNMth3w-unsplash.jpg', 'mark-basarab-y421kXlUOQk-unsplash.jpg', 'mohamed-elsayed-BvSOxut6w6o-unsplash.jpg', 'natarajan-sethuramalingam-9i7MIEbfak0-unsplash.jpg', 'nb.jpg', 'nicolas-dc-DfPgOyU_VUE-unsplash.jpg', 'ningyu-he-K22SK31G-QM-unsplash.jpg', 'olaf-spinner-iwTYniJiMEI-unsplash.jpg', 'olen-gandy-BugKLLbrPBQ-unsplash.jpg', 'pascal-muller-4EajIuUxgAQ-unsplash.jpg', 'pete-nuij-mKnBilvLNnY-unsplash.jpg', 'peter-neumann-JZRlnfsdcj0-unsplash.jpg', 'theodor-lundqvist-6Ox3fPG-qvo-unsplash.jpg', 'thomas-bonometti-5PdgQPopE3Q-unsplash.jpg', 'tom-van-herp-C6PtnEO9iT4-unsplash.jpg', 'zdenek-machacek-2-WOQlC2rjg-unsplash.jpg', 'zdenek-machacek-fLIyZpAukDE-unsplash.jpg', 'zdenek-machacek-Pt3asvL65Mg-unsplash.jpg', 'zdenek-machacek-r-LA7WjBEAM-unsplash.jpg', 'zdenek-machacek-_QG2C0q6J-s-unsplash.jpg']

def rename_ims(bdir=bear_dir, c=finc):
    num = range(len(bear_dir))
    for n in num:
        new_n = n+1
        for bear in bdir:
            newname = str(new_n)+'.jpg'
            new_im = os.path.join(c, newname)
            old_im = os.path.join(c, bear)
            os.rename(old_im, new_im)
            print(new_im)
rename_ims()
