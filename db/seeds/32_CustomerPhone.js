
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('CustomerPhone').del()
    .then(function () {
      // Inserts seed entries
      return knex('CustomerPhone').insert(
        [{ "phoneID": 718, "customerID": 335 },
        { "phoneID": 809, "customerID": 355 },
        { "phoneID": 62, "customerID": 430 },
        { "phoneID": 705, "customerID": 265 },
        { "phoneID": 319, "customerID": 217 },
        { "phoneID": 979, "customerID": 500 },
        { "phoneID": 569, "customerID": 420 },
        { "phoneID": 352, "customerID": 309 },
        { "phoneID": 161, "customerID": 167 },
        { "phoneID": 229, "customerID": 165 },
        { "phoneID": 705, "customerID": 401 },
        { "phoneID": 90, "customerID": 206 },
        { "phoneID": 137, "customerID": 275 },
        { "phoneID": 708, "customerID": 385 },
        { "phoneID": 922, "customerID": 30 },
        { "phoneID": 907, "customerID": 236 },
        { "phoneID": 348, "customerID": 56 },
        { "phoneID": 966, "customerID": 143 },
        { "phoneID": 71, "customerID": 55 },
        { "phoneID": 98, "customerID": 119 },
        { "phoneID": 381, "customerID": 164 },
        { "phoneID": 893, "customerID": 130 },
        { "phoneID": 888, "customerID": 226 },
        { "phoneID": 352, "customerID": 380 },
        { "phoneID": 964, "customerID": 376 },
        { "phoneID": 12, "customerID": 446 },
        { "phoneID": 938, "customerID": 119 },
        { "phoneID": 500, "customerID": 340 },
        { "phoneID": 284, "customerID": 372 },
        { "phoneID": 350, "customerID": 138 },
        { "phoneID": 168, "customerID": 454 },
        { "phoneID": 270, "customerID": 61 },
        { "phoneID": 361, "customerID": 456 },
        { "phoneID": 336, "customerID": 436 },
        { "phoneID": 298, "customerID": 170 },
        { "phoneID": 425, "customerID": 209 },
        { "phoneID": 392, "customerID": 154 },
        { "phoneID": 463, "customerID": 489 },
        { "phoneID": 105, "customerID": 204 },
        { "phoneID": 81, "customerID": 289 },
        { "phoneID": 487, "customerID": 306 },
        { "phoneID": 32, "customerID": 30 },
        { "phoneID": 151, "customerID": 289 },
        { "phoneID": 557, "customerID": 417 },
        { "phoneID": 803, "customerID": 195 },
        { "phoneID": 866, "customerID": 248 },
        { "phoneID": 383, "customerID": 308 },
        { "phoneID": 437, "customerID": 243 },
        { "phoneID": 755, "customerID": 332 },
        { "phoneID": 22, "customerID": 26 },
        { "phoneID": 307, "customerID": 197 },
        { "phoneID": 21, "customerID": 72 },
        { "phoneID": 66, "customerID": 327 },
        { "phoneID": 893, "customerID": 366 },
        { "phoneID": 943, "customerID": 57 },
        { "phoneID": 903, "customerID": 352 },
        { "phoneID": 837, "customerID": 392 },
        { "phoneID": 726, "customerID": 408 },
        { "phoneID": 32, "customerID": 199 },
        { "phoneID": 186, "customerID": 265 },
        { "phoneID": 198, "customerID": 435 },
        { "phoneID": 85, "customerID": 167 },
        { "phoneID": 795, "customerID": 28 },
        { "phoneID": 68, "customerID": 271 },
        { "phoneID": 845, "customerID": 44 },
        { "phoneID": 289, "customerID": 102 },
        { "phoneID": 385, "customerID": 140 },
        { "phoneID": 393, "customerID": 314 },
        { "phoneID": 686, "customerID": 206 },
        { "phoneID": 130, "customerID": 164 },
        { "phoneID": 116, "customerID": 460 },
        { "phoneID": 398, "customerID": 53 },
        { "phoneID": 334, "customerID": 435 },
        { "phoneID": 648, "customerID": 280 },
        { "phoneID": 74, "customerID": 16 },
        { "phoneID": 496, "customerID": 220 },
        { "phoneID": 766, "customerID": 132 },
        { "phoneID": 104, "customerID": 104 },
        { "phoneID": 479, "customerID": 265 },
        { "phoneID": 149, "customerID": 456 },
        { "phoneID": 307, "customerID": 239 },
        { "phoneID": 368, "customerID": 295 },
        { "phoneID": 648, "customerID": 204 },
        { "phoneID": 798, "customerID": 158 },
        { "phoneID": 703, "customerID": 310 },
        { "phoneID": 975, "customerID": 240 },
        { "phoneID": 108, "customerID": 351 },
        { "phoneID": 709, "customerID": 13 },
        { "phoneID": 989, "customerID": 96 },
        { "phoneID": 541, "customerID": 195 },
        { "phoneID": 81, "customerID": 78 },
        { "phoneID": 14, "customerID": 500 },
        { "phoneID": 890, "customerID": 37 },
        { "phoneID": 685, "customerID": 347 },
        { "phoneID": 411, "customerID": 183 },
        { "phoneID": 114, "customerID": 312 },
        { "phoneID": 584, "customerID": 279 },
        { "phoneID": 395, "customerID": 339 },
        { "phoneID": 254, "customerID": 365 },
        { "phoneID": 643, "customerID": 453 },
        { "phoneID": 812, "customerID": 415 },
        { "phoneID": 391, "customerID": 393 },
        { "phoneID": 147, "customerID": 158 },
        { "phoneID": 284, "customerID": 82 },
        { "phoneID": 932, "customerID": 26 },
        { "phoneID": 82, "customerID": 278 },
        { "phoneID": 483, "customerID": 454 },
        { "phoneID": 501, "customerID": 93 },
        { "phoneID": 390, "customerID": 324 },
        { "phoneID": 512, "customerID": 373 },
        { "phoneID": 389, "customerID": 90 },
        { "phoneID": 795, "customerID": 8 },
        { "phoneID": 726, "customerID": 294 },
        { "phoneID": 37, "customerID": 234 },
        { "phoneID": 341, "customerID": 481 },
        { "phoneID": 274, "customerID": 474 },
        { "phoneID": 637, "customerID": 23 },
        { "phoneID": 202, "customerID": 492 },
        { "phoneID": 674, "customerID": 454 },
        { "phoneID": 61, "customerID": 324 },
        { "phoneID": 563, "customerID": 292 },
        { "phoneID": 237, "customerID": 20 },
        { "phoneID": 295, "customerID": 197 },
        { "phoneID": 264, "customerID": 9 },
        { "phoneID": 920, "customerID": 292 },
        { "phoneID": 18, "customerID": 221 },
        { "phoneID": 605, "customerID": 287 },
        { "phoneID": 456, "customerID": 416 },
        { "phoneID": 994, "customerID": 170 },
        { "phoneID": 942, "customerID": 357 },
        { "phoneID": 519, "customerID": 380 },
        { "phoneID": 807, "customerID": 429 },
        { "phoneID": 66, "customerID": 197 },
        { "phoneID": 417, "customerID": 389 },
        { "phoneID": 582, "customerID": 146 },
        { "phoneID": 138, "customerID": 278 },
        { "phoneID": 574, "customerID": 258 },
        { "phoneID": 259, "customerID": 87 },
        { "phoneID": 986, "customerID": 500 },
        { "phoneID": 447, "customerID": 165 },
        { "phoneID": 586, "customerID": 33 },
        { "phoneID": 780, "customerID": 352 },
        { "phoneID": 419, "customerID": 469 },
        { "phoneID": 865, "customerID": 277 },
        { "phoneID": 120, "customerID": 131 },
        { "phoneID": 611, "customerID": 321 },
        { "phoneID": 204, "customerID": 250 },
        { "phoneID": 135, "customerID": 486 },
        { "phoneID": 240, "customerID": 378 },
        { "phoneID": 519, "customerID": 50 },
        { "phoneID": 869, "customerID": 52 },
        { "phoneID": 428, "customerID": 183 },
        { "phoneID": 213, "customerID": 396 },
        { "phoneID": 280, "customerID": 469 },
        { "phoneID": 818, "customerID": 177 },
        { "phoneID": 982, "customerID": 178 },
        { "phoneID": 903, "customerID": 130 },
        { "phoneID": 404, "customerID": 155 },
        { "phoneID": 151, "customerID": 491 },
        { "phoneID": 48, "customerID": 107 },
        { "phoneID": 949, "customerID": 278 },
        { "phoneID": 621, "customerID": 191 },
        { "phoneID": 719, "customerID": 324 },
        { "phoneID": 622, "customerID": 263 },
        { "phoneID": 673, "customerID": 366 },
        { "phoneID": 243, "customerID": 338 },
        { "phoneID": 470, "customerID": 411 },
        { "phoneID": 971, "customerID": 200 },
        { "phoneID": 156, "customerID": 56 },
        { "phoneID": 523, "customerID": 310 },
        { "phoneID": 996, "customerID": 13 },
        { "phoneID": 5, "customerID": 5 },
        { "phoneID": 274, "customerID": 379 },
        { "phoneID": 144, "customerID": 239 },
        { "phoneID": 971, "customerID": 460 },
        { "phoneID": 593, "customerID": 487 },
        { "phoneID": 253, "customerID": 234 },
        { "phoneID": 553, "customerID": 348 },
        { "phoneID": 472, "customerID": 88 },
        { "phoneID": 882, "customerID": 217 },
        { "phoneID": 497, "customerID": 45 },
        { "phoneID": 924, "customerID": 187 },
        { "phoneID": 722, "customerID": 174 },
        { "phoneID": 274, "customerID": 164 },
        { "phoneID": 866, "customerID": 163 },
        { "phoneID": 194, "customerID": 130 },
        { "phoneID": 42, "customerID": 269 },
        { "phoneID": 978, "customerID": 455 },
        { "phoneID": 268, "customerID": 498 },
        { "phoneID": 812, "customerID": 124 },
        { "phoneID": 153, "customerID": 30 },
        { "phoneID": 717, "customerID": 217 },
        { "phoneID": 651, "customerID": 389 },
        { "phoneID": 258, "customerID": 138 },
        { "phoneID": 728, "customerID": 112 },
        { "phoneID": 154, "customerID": 314 },
        { "phoneID": 299, "customerID": 68 },
        { "phoneID": 279, "customerID": 427 },
        { "phoneID": 140, "customerID": 310 },
        { "phoneID": 578, "customerID": 356 },
        { "phoneID": 338, "customerID": 500 },
        { "phoneID": 221, "customerID": 49 },
        { "phoneID": 655, "customerID": 280 },
        { "phoneID": 305, "customerID": 48 },
        { "phoneID": 179, "customerID": 17 },
        { "phoneID": 341, "customerID": 341 },
        { "phoneID": 777, "customerID": 145 },
        { "phoneID": 50, "customerID": 338 },
        { "phoneID": 982, "customerID": 232 },
        { "phoneID": 960, "customerID": 305 },
        { "phoneID": 624, "customerID": 229 },
        { "phoneID": 821, "customerID": 306 },
        { "phoneID": 192, "customerID": 96 },
        { "phoneID": 481, "customerID": 495 },
        { "phoneID": 288, "customerID": 123 },
        { "phoneID": 878, "customerID": 117 },
        { "phoneID": 678, "customerID": 98 },
        { "phoneID": 57, "customerID": 448 },
        { "phoneID": 916, "customerID": 338 },
        { "phoneID": 427, "customerID": 365 },
        { "phoneID": 464, "customerID": 39 },
        { "phoneID": 299, "customerID": 364 },
        { "phoneID": 697, "customerID": 171 },
        { "phoneID": 336, "customerID": 53 },
        { "phoneID": 652, "customerID": 30 },
        { "phoneID": 771, "customerID": 366 },
        { "phoneID": 781, "customerID": 499 },
        { "phoneID": 197, "customerID": 417 },
        { "phoneID": 521, "customerID": 88 },
        { "phoneID": 481, "customerID": 235 },
        { "phoneID": 848, "customerID": 305 },
        { "phoneID": 287, "customerID": 380 },
        { "phoneID": 893, "customerID": 440 },
        { "phoneID": 472, "customerID": 316 },
        { "phoneID": 92, "customerID": 499 },
        { "phoneID": 273, "customerID": 22 },
        { "phoneID": 316, "customerID": 335 },
        { "phoneID": 629, "customerID": 261 },
        { "phoneID": 107, "customerID": 449 },
        { "phoneID": 629, "customerID": 305 },
        { "phoneID": 525, "customerID": 214 },
        { "phoneID": 888, "customerID": 72 },
        { "phoneID": 107, "customerID": 431 },
        { "phoneID": 827, "customerID": 484 },
        { "phoneID": 1000, "customerID": 161 },
        { "phoneID": 156, "customerID": 450 },
        { "phoneID": 71, "customerID": 230 },
        { "phoneID": 251, "customerID": 360 },
        { "phoneID": 755, "customerID": 390 },
        { "phoneID": 864, "customerID": 216 },
        { "phoneID": 166, "customerID": 498 },
        { "phoneID": 297, "customerID": 391 },
        { "phoneID": 537, "customerID": 225 },
        { "phoneID": 190, "customerID": 179 },
        { "phoneID": 334, "customerID": 27 },
        { "phoneID": 549, "customerID": 490 },
        { "phoneID": 293, "customerID": 97 },
        { "phoneID": 26, "customerID": 127 },
        { "phoneID": 411, "customerID": 83 },
        { "phoneID": 174, "customerID": 30 },
        { "phoneID": 43, "customerID": 131 },
        { "phoneID": 286, "customerID": 248 },
        { "phoneID": 884, "customerID": 470 },
        { "phoneID": 864, "customerID": 476 },
        { "phoneID": 716, "customerID": 67 },
        { "phoneID": 110, "customerID": 358 },
        { "phoneID": 40, "customerID": 95 },
        { "phoneID": 325, "customerID": 281 },
        { "phoneID": 52, "customerID": 176 },
        { "phoneID": 23, "customerID": 463 },
        { "phoneID": 796, "customerID": 109 },
        { "phoneID": 908, "customerID": 350 },
        { "phoneID": 643, "customerID": 341 },
        { "phoneID": 894, "customerID": 104 },
        { "phoneID": 551, "customerID": 134 },
        { "phoneID": 336, "customerID": 115 },
        { "phoneID": 111, "customerID": 78 },
        { "phoneID": 258, "customerID": 454 },
        { "phoneID": 753, "customerID": 327 },
        { "phoneID": 119, "customerID": 11 },
        { "phoneID": 198, "customerID": 138 },
        { "phoneID": 658, "customerID": 224 },
        { "phoneID": 661, "customerID": 476 },
        { "phoneID": 992, "customerID": 418 },
        { "phoneID": 944, "customerID": 97 },
        { "phoneID": 728, "customerID": 68 },
        { "phoneID": 382, "customerID": 151 },
        { "phoneID": 351, "customerID": 191 },
        { "phoneID": 767, "customerID": 482 },
        { "phoneID": 19, "customerID": 438 },
        { "phoneID": 896, "customerID": 461 },
        { "phoneID": 756, "customerID": 143 },
        { "phoneID": 828, "customerID": 287 },
        { "phoneID": 878, "customerID": 137 },
        { "phoneID": 603, "customerID": 10 },
        { "phoneID": 758, "customerID": 337 },
        { "phoneID": 76, "customerID": 66 },
        { "phoneID": 691, "customerID": 28 },
        { "phoneID": 814, "customerID": 316 },
        { "phoneID": 458, "customerID": 499 },
        { "phoneID": 61, "customerID": 82 },
        { "phoneID": 67, "customerID": 191 },
        { "phoneID": 745, "customerID": 161 },
        { "phoneID": 275, "customerID": 483 },
        { "phoneID": 262, "customerID": 30 },
        { "phoneID": 415, "customerID": 31 },
        { "phoneID": 693, "customerID": 223 },
        { "phoneID": 909, "customerID": 18 },
        { "phoneID": 495, "customerID": 21 },
        { "phoneID": 151, "customerID": 181 },
        { "phoneID": 741, "customerID": 500 },
        { "phoneID": 914, "customerID": 146 },
        { "phoneID": 433, "customerID": 320 },
        { "phoneID": 579, "customerID": 253 },
        { "phoneID": 795, "customerID": 46 },
        { "phoneID": 179, "customerID": 462 },
        { "phoneID": 861, "customerID": 176 },
        { "phoneID": 165, "customerID": 364 },
        { "phoneID": 657, "customerID": 398 },
        { "phoneID": 644, "customerID": 414 },
        { "phoneID": 443, "customerID": 24 },
        { "phoneID": 606, "customerID": 140 },
        { "phoneID": 427, "customerID": 369 },
        { "phoneID": 535, "customerID": 86 },
        { "phoneID": 762, "customerID": 365 },
        { "phoneID": 275, "customerID": 345 },
        { "phoneID": 595, "customerID": 427 },
        { "phoneID": 414, "customerID": 279 },
        { "phoneID": 375, "customerID": 307 },
        { "phoneID": 619, "customerID": 393 },
        { "phoneID": 448, "customerID": 224 },
        { "phoneID": 807, "customerID": 55 },
        { "phoneID": 607, "customerID": 485 },
        { "phoneID": 164, "customerID": 420 },
        { "phoneID": 403, "customerID": 114 },
        { "phoneID": 312, "customerID": 85 },
        { "phoneID": 84, "customerID": 471 },
        { "phoneID": 129, "customerID": 480 },
        { "phoneID": 117, "customerID": 365 },
        { "phoneID": 512, "customerID": 319 },
        { "phoneID": 32, "customerID": 64 },
        { "phoneID": 704, "customerID": 392 },
        { "phoneID": 849, "customerID": 286 },
        { "phoneID": 716, "customerID": 120 },
        { "phoneID": 913, "customerID": 433 },
        { "phoneID": 787, "customerID": 253 },
        { "phoneID": 392, "customerID": 224 },
        { "phoneID": 195, "customerID": 385 },
        { "phoneID": 352, "customerID": 279 },
        { "phoneID": 786, "customerID": 333 },
        { "phoneID": 939, "customerID": 365 },
        { "phoneID": 13, "customerID": 201 },
        { "phoneID": 826, "customerID": 261 },
        { "phoneID": 602, "customerID": 327 },
        { "phoneID": 753, "customerID": 176 },
        { "phoneID": 646, "customerID": 262 },
        { "phoneID": 316, "customerID": 343 },
        { "phoneID": 782, "customerID": 106 },
        { "phoneID": 544, "customerID": 449 },
        { "phoneID": 161, "customerID": 407 },
        { "phoneID": 865, "customerID": 192 },
        { "phoneID": 706, "customerID": 155 },
        { "phoneID": 905, "customerID": 40 },
        { "phoneID": 102, "customerID": 292 },
        { "phoneID": 895, "customerID": 389 },
        { "phoneID": 248, "customerID": 145 },
        { "phoneID": 971, "customerID": 272 },
        { "phoneID": 64, "customerID": 341 },
        { "phoneID": 204, "customerID": 206 },
        { "phoneID": 758, "customerID": 490 },
        { "phoneID": 927, "customerID": 423 },
        { "phoneID": 167, "customerID": 161 },
        { "phoneID": 862, "customerID": 369 },
        { "phoneID": 927, "customerID": 398 },
        { "phoneID": 826, "customerID": 248 },
        { "phoneID": 648, "customerID": 109 },
        { "phoneID": 724, "customerID": 103 },
        { "phoneID": 443, "customerID": 421 },
        { "phoneID": 376, "customerID": 408 },
        { "phoneID": 482, "customerID": 294 },
        { "phoneID": 873, "customerID": 307 },
        { "phoneID": 233, "customerID": 33 },
        { "phoneID": 440, "customerID": 16 },
        { "phoneID": 563, "customerID": 44 },
        { "phoneID": 4, "customerID": 242 },
        { "phoneID": 689, "customerID": 373 },
        { "phoneID": 391, "customerID": 50 },
        { "phoneID": 594, "customerID": 418 },
        { "phoneID": 968, "customerID": 371 },
        { "phoneID": 48, "customerID": 43 },
        { "phoneID": 71, "customerID": 409 },
        { "phoneID": 674, "customerID": 231 },
        { "phoneID": 203, "customerID": 496 },
        { "phoneID": 319, "customerID": 449 },
        { "phoneID": 835, "customerID": 448 },
        { "phoneID": 742, "customerID": 406 },
        { "phoneID": 394, "customerID": 423 },
        { "phoneID": 302, "customerID": 481 },
        { "phoneID": 737, "customerID": 405 },
        { "phoneID": 749, "customerID": 405 },
        { "phoneID": 467, "customerID": 20 },
        { "phoneID": 958, "customerID": 445 },
        { "phoneID": 263, "customerID": 47 },
        { "phoneID": 187, "customerID": 38 },
        { "phoneID": 204, "customerID": 70 },
        { "phoneID": 612, "customerID": 319 },
        { "phoneID": 591, "customerID": 276 },
        { "phoneID": 840, "customerID": 170 },
        { "phoneID": 202, "customerID": 458 },
        { "phoneID": 85, "customerID": 358 },
        { "phoneID": 62, "customerID": 267 },
        { "phoneID": 400, "customerID": 76 },
        { "phoneID": 778, "customerID": 298 },
        { "phoneID": 324, "customerID": 444 },
        { "phoneID": 41, "customerID": 295 },
        { "phoneID": 406, "customerID": 280 },
        { "phoneID": 769, "customerID": 450 },
        { "phoneID": 212, "customerID": 139 },
        { "phoneID": 128, "customerID": 366 },
        { "phoneID": 248, "customerID": 360 },
        { "phoneID": 303, "customerID": 247 },
        { "phoneID": 347, "customerID": 182 },
        { "phoneID": 858, "customerID": 264 },
        { "phoneID": 676, "customerID": 263 },
        { "phoneID": 725, "customerID": 405 },
        { "phoneID": 282, "customerID": 110 },
        { "phoneID": 712, "customerID": 201 },
        { "phoneID": 561, "customerID": 183 },
        { "phoneID": 129, "customerID": 7 },
        { "phoneID": 482, "customerID": 50 },
        { "phoneID": 977, "customerID": 221 },
        { "phoneID": 637, "customerID": 486 },
        { "phoneID": 538, "customerID": 97 },
        { "phoneID": 688, "customerID": 42 },
        { "phoneID": 906, "customerID": 4 },
        { "phoneID": 38, "customerID": 175 },
        { "phoneID": 108, "customerID": 201 },
        { "phoneID": 625, "customerID": 325 },
        { "phoneID": 864, "customerID": 218 },
        { "phoneID": 498, "customerID": 281 },
        { "phoneID": 328, "customerID": 316 },
        { "phoneID": 46, "customerID": 71 },
        { "phoneID": 199, "customerID": 176 },
        { "phoneID": 235, "customerID": 215 },
        { "phoneID": 533, "customerID": 96 },
        { "phoneID": 450, "customerID": 57 },
        { "phoneID": 579, "customerID": 256 },
        { "phoneID": 173, "customerID": 175 },
        { "phoneID": 541, "customerID": 212 },
        { "phoneID": 942, "customerID": 201 },
        { "phoneID": 947, "customerID": 57 },
        { "phoneID": 631, "customerID": 329 },
        { "phoneID": 15, "customerID": 200 },
        { "phoneID": 61, "customerID": 104 },
        { "phoneID": 382, "customerID": 476 },
        { "phoneID": 683, "customerID": 2 },
        { "phoneID": 739, "customerID": 197 },
        { "phoneID": 934, "customerID": 442 },
        { "phoneID": 559, "customerID": 170 },
        { "phoneID": 348, "customerID": 37 },
        { "phoneID": 296, "customerID": 169 },
        { "phoneID": 949, "customerID": 16 },
        { "phoneID": 18, "customerID": 178 },
        { "phoneID": 805, "customerID": 168 },
        { "phoneID": 409, "customerID": 239 },
        { "phoneID": 395, "customerID": 481 },
        { "phoneID": 692, "customerID": 496 },
        { "phoneID": 429, "customerID": 327 },
        { "phoneID": 654, "customerID": 123 },
        { "phoneID": 647, "customerID": 480 },
        { "phoneID": 812, "customerID": 221 },
        { "phoneID": 271, "customerID": 133 },
        { "phoneID": 316, "customerID": 438 },
        { "phoneID": 829, "customerID": 478 },
        { "phoneID": 758, "customerID": 178 },
        { "phoneID": 483, "customerID": 446 },
        { "phoneID": 545, "customerID": 16 },
        { "phoneID": 157, "customerID": 377 },
        { "phoneID": 457, "customerID": 434 },
        { "phoneID": 278, "customerID": 238 },
        { "phoneID": 120, "customerID": 296 },
        { "phoneID": 999, "customerID": 457 },
        { "phoneID": 993, "customerID": 137 },
        { "phoneID": 872, "customerID": 131 },
        { "phoneID": 330, "customerID": 54 },
        { "phoneID": 851, "customerID": 239 },
        { "phoneID": 706, "customerID": 292 },
        { "phoneID": 875, "customerID": 440 },
        { "phoneID": 298, "customerID": 305 },
        { "phoneID": 734, "customerID": 236 },
        { "phoneID": 307, "customerID": 380 },
        { "phoneID": 207, "customerID": 86 },
        { "phoneID": 148, "customerID": 17 },
        { "phoneID": 404, "customerID": 385 },
        { "phoneID": 500, "customerID": 279 },
        { "phoneID": 594, "customerID": 465 },
        { "phoneID": 431, "customerID": 407 },
        { "phoneID": 693, "customerID": 265 },
        { "phoneID": 991, "customerID": 393 },
        { "phoneID": 998, "customerID": 172 }]
      );
    });
};