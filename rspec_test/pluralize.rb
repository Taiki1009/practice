# 英単語の複数形変換を再現する

# ・末尾が s, sh, ch, o, x のいずれかである英単語の末尾に es を付ける
# ・末尾が f, fe のいずれかである英単語の末尾の f, fe を除き、末尾に ves を付ける
# ・末尾の1文字が y で、末尾から2文字目が a, i, u, e, o のいずれでもない英単語の末尾の y を除き、末尾に ies を付ける
# ・上のいずれの条件にも当てはまらない英単語の末尾には s を付ける

# 3
# dog
# cat
# pig
# ↓
# dogs
# cats
# pigs

# 7
# box
# photo
# axis
# dish
# church
# leaf
# knife
# ↓
# boxes
# photoes
# axises
# dishes
# churches
# leaves
# knives

# 2
# study
# play
# ↓
# studies
# plays