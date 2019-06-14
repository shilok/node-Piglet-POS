
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('CustomerAddress').del()
    .then(function () {
      // Inserts seed entries
      return knex('CustomerAddress').insert(
        [{ "addressID": 944, "customerID": 249 },
        { "addressID": 230, "customerID": 250 },
        { "addressID": 351, "customerID": 58 },
        { "addressID": 780, "customerID": 438 },
        { "addressID": 741, "customerID": 33 },
        { "addressID": 378, "customerID": 370 },
        { "addressID": 999, "customerID": 176 },
        { "addressID": 486, "customerID": 180 },
        { "addressID": 349, "customerID": 239 },
        { "addressID": 255, "customerID": 144 },
        { "addressID": 123, "customerID": 263 },
        { "addressID": 677, "customerID": 208 },
        { "addressID": 477, "customerID": 360 },
        { "addressID": 870, "customerID": 173 },
        { "addressID": 217, "customerID": 16 },
        { "addressID": 225, "customerID": 403 },
        { "addressID": 854, "customerID": 38 },
        { "addressID": 868, "customerID": 272 },
        { "addressID": 764, "customerID": 333 },
        { "addressID": 947, "customerID": 205 },
        { "addressID": 846, "customerID": 123 },
        { "addressID": 249, "customerID": 72 },
        { "addressID": 800, "customerID": 144 },
        { "addressID": 354, "customerID": 68 },
        { "addressID": 910, "customerID": 343 },
        { "addressID": 48, "customerID": 198 },
        { "addressID": 697, "customerID": 205 },
        { "addressID": 381, "customerID": 279 },
        { "addressID": 459, "customerID": 194 },
        { "addressID": 667, "customerID": 437 },
        { "addressID": 652, "customerID": 310 },
        { "addressID": 144, "customerID": 90 },
        { "addressID": 619, "customerID": 55 },
        { "addressID": 2, "customerID": 384 },
        { "addressID": 235, "customerID": 191 },
        { "addressID": 128, "customerID": 270 },
        { "addressID": 682, "customerID": 414 },
        { "addressID": 110, "customerID": 378 },
        { "addressID": 741, "customerID": 373 },
        { "addressID": 526, "customerID": 187 },
        { "addressID": 741, "customerID": 323 },
        { "addressID": 757, "customerID": 414 },
        { "addressID": 389, "customerID": 160 },
        { "addressID": 316, "customerID": 355 },
        { "addressID": 652, "customerID": 234 },
        { "addressID": 458, "customerID": 203 },
        { "addressID": 744, "customerID": 259 },
        { "addressID": 406, "customerID": 29 },
        { "addressID": 702, "customerID": 117 },
        { "addressID": 232, "customerID": 218 },
        { "addressID": 720, "customerID": 257 },
        { "addressID": 533, "customerID": 44 },
        { "addressID": 667, "customerID": 327 },
        { "addressID": 133, "customerID": 157 },
        { "addressID": 122, "customerID": 217 },
        { "addressID": 886, "customerID": 193 },
        { "addressID": 141, "customerID": 303 },
        { "addressID": 328, "customerID": 136 },
        { "addressID": 783, "customerID": 53 },
        { "addressID": 502, "customerID": 133 },
        { "addressID": 953, "customerID": 177 },
        { "addressID": 564, "customerID": 125 },
        { "addressID": 333, "customerID": 287 },
        { "addressID": 450, "customerID": 263 },
        { "addressID": 83, "customerID": 65 },
        { "addressID": 120, "customerID": 103 },
        { "addressID": 137, "customerID": 219 },
        { "addressID": 651, "customerID": 268 },
        { "addressID": 884, "customerID": 332 },
        { "addressID": 633, "customerID": 281 },
        { "addressID": 904, "customerID": 326 },
        { "addressID": 154, "customerID": 201 },
        { "addressID": 138, "customerID": 291 },
        { "addressID": 950, "customerID": 213 },
        { "addressID": 599, "customerID": 167 },
        { "addressID": 189, "customerID": 92 },
        { "addressID": 39, "customerID": 205 },
        { "addressID": 627, "customerID": 109 },
        { "addressID": 457, "customerID": 328 },
        { "addressID": 598, "customerID": 275 },
        { "addressID": 688, "customerID": 440 },
        { "addressID": 438, "customerID": 106 },
        { "addressID": 997, "customerID": 370 },
        { "addressID": 157, "customerID": 235 },
        { "addressID": 691, "customerID": 329 },
        { "addressID": 277, "customerID": 308 },
        { "addressID": 113, "customerID": 118 },
        { "addressID": 196, "customerID": 352 },
        { "addressID": 430, "customerID": 316 },
        { "addressID": 10, "customerID": 52 },
        { "addressID": 692, "customerID": 75 },
        { "addressID": 922, "customerID": 96 },
        { "addressID": 343, "customerID": 364 },
        { "addressID": 82, "customerID": 57 },
        { "addressID": 365, "customerID": 412 },
        { "addressID": 233, "customerID": 92 },
        { "addressID": 403, "customerID": 184 },
        { "addressID": 718, "customerID": 392 },
        { "addressID": 908, "customerID": 17 },
        { "addressID": 871, "customerID": 82 },
        { "addressID": 987, "customerID": 204 },
        { "addressID": 128, "customerID": 7 },
        { "addressID": 168, "customerID": 224 },
        { "addressID": 797, "customerID": 203 },
        { "addressID": 764, "customerID": 214 },
        { "addressID": 87, "customerID": 26 },
        { "addressID": 567, "customerID": 168 },
        { "addressID": 131, "customerID": 436 },
        { "addressID": 189, "customerID": 165 },
        { "addressID": 14, "customerID": 33 },
        { "addressID": 43, "customerID": 398 },
        { "addressID": 474, "customerID": 180 },
        { "addressID": 718, "customerID": 448 },
        { "addressID": 990, "customerID": 409 },
        { "addressID": 513, "customerID": 93 },
        { "addressID": 785, "customerID": 108 },
        { "addressID": 788, "customerID": 247 },
        { "addressID": 166, "customerID": 200 },
        { "addressID": 936, "customerID": 394 },
        { "addressID": 2, "customerID": 258 },
        { "addressID": 643, "customerID": 13 },
        { "addressID": 54, "customerID": 303 },
        { "addressID": 535, "customerID": 437 },
        { "addressID": 349, "customerID": 245 },
        { "addressID": 805, "customerID": 300 },
        { "addressID": 104, "customerID": 363 },
        { "addressID": 668, "customerID": 263 },
        { "addressID": 99, "customerID": 304 },
        { "addressID": 452, "customerID": 87 },
        { "addressID": 965, "customerID": 110 },
        { "addressID": 547, "customerID": 173 },
        { "addressID": 516, "customerID": 249 },
        { "addressID": 941, "customerID": 209 },
        { "addressID": 419, "customerID": 356 },
        { "addressID": 531, "customerID": 229 },
        { "addressID": 895, "customerID": 370 },
        { "addressID": 257, "customerID": 448 },
        { "addressID": 700, "customerID": 432 },
        { "addressID": 14, "customerID": 341 },
        { "addressID": 296, "customerID": 313 },
        { "addressID": 935, "customerID": 265 },
        { "addressID": 438, "customerID": 296 },
        { "addressID": 911, "customerID": 345 },
        { "addressID": 753, "customerID": 26 },
        { "addressID": 217, "customerID": 200 },
        { "addressID": 557, "customerID": 179 },
        { "addressID": 98, "customerID": 174 },
        { "addressID": 153, "customerID": 393 },
        { "addressID": 465, "customerID": 58 },
        { "addressID": 970, "customerID": 249 },
        { "addressID": 417, "customerID": 5 },
        { "addressID": 601, "customerID": 431 },
        { "addressID": 960, "customerID": 256 },
        { "addressID": 776, "customerID": 231 },
        { "addressID": 670, "customerID": 406 },
        { "addressID": 213, "customerID": 447 },
        { "addressID": 872, "customerID": 28 },
        { "addressID": 166, "customerID": 211 },
        { "addressID": 153, "customerID": 23 },
        { "addressID": 321, "customerID": 438 },
        { "addressID": 972, "customerID": 46 },
        { "addressID": 612, "customerID": 293 },
        { "addressID": 508, "customerID": 448 },
        { "addressID": 781, "customerID": 345 },
        { "addressID": 788, "customerID": 33 },
        { "addressID": 18, "customerID": 36 },
        { "addressID": 663, "customerID": 233 },
        { "addressID": 342, "customerID": 394 },
        { "addressID": 140, "customerID": 223 },
        { "addressID": 351, "customerID": 270 },
        { "addressID": 454, "customerID": 103 },
        { "addressID": 959, "customerID": 146 },
        { "addressID": 596, "customerID": 14 },
        { "addressID": 997, "customerID": 220 },
        { "addressID": 64, "customerID": 169 },
        { "addressID": 651, "customerID": 206 },
        { "addressID": 129, "customerID": 76 },
        { "addressID": 882, "customerID": 90 },
        { "addressID": 2, "customerID": 14 },
        { "addressID": 884, "customerID": 39 },
        { "addressID": 885, "customerID": 139 },
        { "addressID": 128, "customerID": 113 },
        { "addressID": 56, "customerID": 321 },
        { "addressID": 225, "customerID": 146 },
        { "addressID": 949, "customerID": 31 },
        { "addressID": 357, "customerID": 192 },
        { "addressID": 568, "customerID": 7 },
        { "addressID": 501, "customerID": 66 },
        { "addressID": 516, "customerID": 250 },
        { "addressID": 941, "customerID": 216 },
        { "addressID": 790, "customerID": 51 },
        { "addressID": 305, "customerID": 45 },
        { "addressID": 956, "customerID": 324 },
        { "addressID": 846, "customerID": 97 },
        { "addressID": 20, "customerID": 194 },
        { "addressID": 231, "customerID": 95 },
        { "addressID": 182, "customerID": 70 },
        { "addressID": 276, "customerID": 426 },
        { "addressID": 414, "customerID": 272 },
        { "addressID": 127, "customerID": 334 },
        { "addressID": 491, "customerID": 239 },
        { "addressID": 264, "customerID": 172 },
        { "addressID": 39, "customerID": 337 },
        { "addressID": 295, "customerID": 10 },
        { "addressID": 407, "customerID": 325 },
        { "addressID": 442, "customerID": 34 },
        { "addressID": 316, "customerID": 450 },
        { "addressID": 29, "customerID": 261 },
        { "addressID": 620, "customerID": 391 },
        { "addressID": 463, "customerID": 120 },
        { "addressID": 437, "customerID": 200 },
        { "addressID": 6, "customerID": 304 },
        { "addressID": 845, "customerID": 347 },
        { "addressID": 547, "customerID": 368 },
        { "addressID": 540, "customerID": 183 },
        { "addressID": 536, "customerID": 130 },
        { "addressID": 370, "customerID": 409 },
        { "addressID": 200, "customerID": 401 },
        { "addressID": 886, "customerID": 361 },
        { "addressID": 166, "customerID": 171 },
        { "addressID": 525, "customerID": 41 },
        { "addressID": 172, "customerID": 134 },
        { "addressID": 138, "customerID": 168 },
        { "addressID": 527, "customerID": 401 },
        { "addressID": 767, "customerID": 268 },
        { "addressID": 600, "customerID": 195 },
        { "addressID": 71, "customerID": 87 },
        { "addressID": 870, "customerID": 344 },
        { "addressID": 294, "customerID": 145 },
        { "addressID": 887, "customerID": 369 },
        { "addressID": 315, "customerID": 16 },
        { "addressID": 197, "customerID": 400 },
        { "addressID": 996, "customerID": 201 },
        { "addressID": 92, "customerID": 226 },
        { "addressID": 702, "customerID": 366 },
        { "addressID": 210, "customerID": 97 },
        { "addressID": 688, "customerID": 367 },
        { "addressID": 318, "customerID": 261 },
        { "addressID": 960, "customerID": 443 },
        { "addressID": 825, "customerID": 179 },
        { "addressID": 235, "customerID": 386 },
        { "addressID": 570, "customerID": 286 },
        { "addressID": 314, "customerID": 13 },
        { "addressID": 544, "customerID": 198 },
        { "addressID": 559, "customerID": 245 },
        { "addressID": 78, "customerID": 364 },
        { "addressID": 546, "customerID": 240 },
        { "addressID": 31, "customerID": 302 },
        { "addressID": 854, "customerID": 133 },
        { "addressID": 461, "customerID": 230 },
        { "addressID": 657, "customerID": 47 },
        { "addressID": 309, "customerID": 124 },
        { "addressID": 766, "customerID": 60 },
        { "addressID": 339, "customerID": 110 },
        { "addressID": 854, "customerID": 432 },
        { "addressID": 253, "customerID": 36 },
        { "addressID": 266, "customerID": 16 },
        { "addressID": 471, "customerID": 421 },
        { "addressID": 167, "customerID": 121 },
        { "addressID": 301, "customerID": 23 },
        { "addressID": 739, "customerID": 413 },
        { "addressID": 854, "customerID": 305 },
        { "addressID": 443, "customerID": 119 },
        { "addressID": 982, "customerID": 435 },
        { "addressID": 99, "customerID": 431 },
        { "addressID": 487, "customerID": 232 },
        { "addressID": 363, "customerID": 259 },
        { "addressID": 125, "customerID": 11 },
        { "addressID": 180, "customerID": 43 },
        { "addressID": 346, "customerID": 69 },
        { "addressID": 54, "customerID": 340 },
        { "addressID": 566, "customerID": 299 },
        { "addressID": 803, "customerID": 223 },
        { "addressID": 345, "customerID": 166 },
        { "addressID": 153, "customerID": 365 },
        { "addressID": 695, "customerID": 105 },
        { "addressID": 188, "customerID": 334 },
        { "addressID": 343, "customerID": 82 },
        { "addressID": 175, "customerID": 370 },
        { "addressID": 450, "customerID": 98 },
        { "addressID": 408, "customerID": 135 },
        { "addressID": 264, "customerID": 38 },
        { "addressID": 869, "customerID": 9 },
        { "addressID": 613, "customerID": 361 },
        { "addressID": 877, "customerID": 76 },
        { "addressID": 322, "customerID": 212 },
        { "addressID": 43, "customerID": 441 },
        { "addressID": 766, "customerID": 41 },
        { "addressID": 314, "customerID": 109 },
        { "addressID": 922, "customerID": 283 },
        { "addressID": 969, "customerID": 177 },
        { "addressID": 480, "customerID": 217 },
        { "addressID": 862, "customerID": 160 },
        { "addressID": 60, "customerID": 308 },
        { "addressID": 524, "customerID": 195 },
        { "addressID": 424, "customerID": 295 },
        { "addressID": 137, "customerID": 320 },
        { "addressID": 947, "customerID": 388 },
        { "addressID": 17, "customerID": 39 },
        { "addressID": 958, "customerID": 115 },
        { "addressID": 525, "customerID": 422 },
        { "addressID": 838, "customerID": 279 },
        { "addressID": 43, "customerID": 220 },
        { "addressID": 575, "customerID": 383 },
        { "addressID": 122, "customerID": 183 },
        { "addressID": 805, "customerID": 320 },
        { "addressID": 744, "customerID": 298 },
        { "addressID": 694, "customerID": 68 },
        { "addressID": 315, "customerID": 434 },
        { "addressID": 982, "customerID": 400 },
        { "addressID": 893, "customerID": 55 },
        { "addressID": 924, "customerID": 74 },
        { "addressID": 656, "customerID": 320 },
        { "addressID": 847, "customerID": 100 },
        { "addressID": 98, "customerID": 409 },
        { "addressID": 545, "customerID": 236 },
        { "addressID": 604, "customerID": 47 },
        { "addressID": 188, "customerID": 416 },
        { "addressID": 640, "customerID": 193 },
        { "addressID": 100, "customerID": 252 },
        { "addressID": 670, "customerID": 400 },
        { "addressID": 717, "customerID": 153 },
        { "addressID": 431, "customerID": 343 },
        { "addressID": 607, "customerID": 147 },
        { "addressID": 70, "customerID": 309 },
        { "addressID": 216, "customerID": 160 },
        { "addressID": 241, "customerID": 251 },
        { "addressID": 844, "customerID": 39 },
        { "addressID": 308, "customerID": 411 },
        { "addressID": 203, "customerID": 68 },
        { "addressID": 999, "customerID": 31 },
        { "addressID": 842, "customerID": 101 },
        { "addressID": 263, "customerID": 128 },
        { "addressID": 577, "customerID": 365 },
        { "addressID": 384, "customerID": 169 },
        { "addressID": 686, "customerID": 156 },
        { "addressID": 999, "customerID": 24 },
        { "addressID": 565, "customerID": 52 },
        { "addressID": 539, "customerID": 304 },
        { "addressID": 443, "customerID": 22 },
        { "addressID": 243, "customerID": 11 },
        { "addressID": 560, "customerID": 53 },
        { "addressID": 477, "customerID": 52 },
        { "addressID": 419, "customerID": 241 },
        { "addressID": 289, "customerID": 253 },
        { "addressID": 54, "customerID": 371 },
        { "addressID": 72, "customerID": 397 },
        { "addressID": 257, "customerID": 285 },
        { "addressID": 695, "customerID": 246 },
        { "addressID": 735, "customerID": 176 },
        { "addressID": 7, "customerID": 36 },
        { "addressID": 185, "customerID": 67 },
        { "addressID": 434, "customerID": 219 },
        { "addressID": 359, "customerID": 21 },
        { "addressID": 239, "customerID": 225 },
        { "addressID": 625, "customerID": 272 },
        { "addressID": 944, "customerID": 438 },
        { "addressID": 917, "customerID": 129 },
        { "addressID": 153, "customerID": 138 },
        { "addressID": 984, "customerID": 221 },
        { "addressID": 955, "customerID": 438 },
        { "addressID": 976, "customerID": 111 },
        { "addressID": 122, "customerID": 446 },
        { "addressID": 707, "customerID": 72 },
        { "addressID": 115, "customerID": 419 },
        { "addressID": 118, "customerID": 18 },
        { "addressID": 298, "customerID": 227 },
        { "addressID": 510, "customerID": 141 },
        { "addressID": 389, "customerID": 382 },
        { "addressID": 587, "customerID": 334 },
        { "addressID": 309, "customerID": 422 },
        { "addressID": 991, "customerID": 421 },
        { "addressID": 686, "customerID": 214 },
        { "addressID": 949, "customerID": 83 },
        { "addressID": 879, "customerID": 442 },
        { "addressID": 697, "customerID": 204 },
        { "addressID": 651, "customerID": 398 },
        { "addressID": 288, "customerID": 126 },
        { "addressID": 939, "customerID": 93 },
        { "addressID": 408, "customerID": 177 },
        { "addressID": 156, "customerID": 61 },
        { "addressID": 660, "customerID": 188 },
        { "addressID": 265, "customerID": 71 },
        { "addressID": 360, "customerID": 232 },
        { "addressID": 415, "customerID": 432 },
        { "addressID": 134, "customerID": 202 },
        { "addressID": 532, "customerID": 188 },
        { "addressID": 792, "customerID": 437 },
        { "addressID": 602, "customerID": 418 },
        { "addressID": 147, "customerID": 283 },
        { "addressID": 428, "customerID": 105 },
        { "addressID": 335, "customerID": 102 },
        { "addressID": 555, "customerID": 181 },
        { "addressID": 41, "customerID": 322 },
        { "addressID": 678, "customerID": 189 },
        { "addressID": 959, "customerID": 413 },
        { "addressID": 410, "customerID": 41 },
        { "addressID": 903, "customerID": 383 },
        { "addressID": 336, "customerID": 194 },
        { "addressID": 177, "customerID": 335 },
        { "addressID": 119, "customerID": 344 },
        { "addressID": 113, "customerID": 250 },
        { "addressID": 200, "customerID": 235 },
        { "addressID": 43, "customerID": 109 },
        { "addressID": 770, "customerID": 132 },
        { "addressID": 892, "customerID": 267 },
        { "addressID": 759, "customerID": 421 },
        { "addressID": 255, "customerID": 242 },
        { "addressID": 160, "customerID": 431 },
        { "addressID": 237, "customerID": 249 },
        { "addressID": 431, "customerID": 379 },
        { "addressID": 171, "customerID": 295 },
        { "addressID": 551, "customerID": 273 },
        { "addressID": 645, "customerID": 435 },
        { "addressID": 537, "customerID": 154 },
        { "addressID": 64, "customerID": 145 },
        { "addressID": 255, "customerID": 441 },
        { "addressID": 924, "customerID": 299 },
        { "addressID": 155, "customerID": 376 },
        { "addressID": 378, "customerID": 189 },
        { "addressID": 963, "customerID": 180 },
        { "addressID": 782, "customerID": 157 },
        { "addressID": 19, "customerID": 110 },
        { "addressID": 659, "customerID": 275 },
        { "addressID": 13, "customerID": 394 },
        { "addressID": 679, "customerID": 446 },
        { "addressID": 814, "customerID": 140 },
        { "addressID": 281, "customerID": 320 },
        { "addressID": 245, "customerID": 199 },
        { "addressID": 287, "customerID": 127 },
        { "addressID": 614, "customerID": 414 },
        { "addressID": 767, "customerID": 202 },
        { "addressID": 903, "customerID": 440 },
        { "addressID": 108, "customerID": 177 },
        { "addressID": 791, "customerID": 429 },
        { "addressID": 501, "customerID": 87 },
        { "addressID": 346, "customerID": 112 },
        { "addressID": 976, "customerID": 307 },
        { "addressID": 34, "customerID": 229 },
        { "addressID": 165, "customerID": 424 },
        { "addressID": 419, "customerID": 415 },
        { "addressID": 135, "customerID": 270 },
        { "addressID": 489, "customerID": 186 },
        { "addressID": 635, "customerID": 418 },
        { "addressID": 414, "customerID": 352 },
        { "addressID": 768, "customerID": 424 },
        { "addressID": 693, "customerID": 279 },
        { "addressID": 831, "customerID": 156 },
        { "addressID": 187, "customerID": 254 },
        { "addressID": 722, "customerID": 341 },
        { "addressID": 268, "customerID": 21 },
        { "addressID": 544, "customerID": 300 },
        { "addressID": 418, "customerID": 161 },
        { "addressID": 895, "customerID": 83 },
        { "addressID": 951, "customerID": 149 },
        { "addressID": 183, "customerID": 205 },
        { "addressID": 925, "customerID": 13 },
        { "addressID": 137, "customerID": 376 },
        { "addressID": 18, "customerID": 47 },
        { "addressID": 104, "customerID": 108 },
        { "addressID": 927, "customerID": 340 },
        { "addressID": 365, "customerID": 252 },
        { "addressID": 916, "customerID": 249 },
        { "addressID": 691, "customerID": 382 },
        { "addressID": 283, "customerID": 118 },
        { "addressID": 901, "customerID": 335 },
        { "addressID": 240, "customerID": 254 },
        { "addressID": 543, "customerID": 313 },
        { "addressID": 189, "customerID": 138 },
        { "addressID": 21, "customerID": 352 },
        { "addressID": 323, "customerID": 136 },
        { "addressID": 835, "customerID": 436 },
        { "addressID": 478, "customerID": 371 },
        { "addressID": 485, "customerID": 60 },
        { "addressID": 290, "customerID": 403 },
        { "addressID": 370, "customerID": 67 },
        { "addressID": 927, "customerID": 22 },
        { "addressID": 980, "customerID": 198 },
        { "addressID": 763, "customerID": 309 },
        { "addressID": 694, "customerID": 61 },
        { "addressID": 3, "customerID": 7 },
        { "addressID": 887, "customerID": 73 },
        { "addressID": 955, "customerID": 133 },
        { "addressID": 139, "customerID": 41 },
        { "addressID": 781, "customerID": 375 },
        { "addressID": 145, "customerID": 372 },
        { "addressID": 870, "customerID": 140 },
        { "addressID": 950, "customerID": 401 },
        { "addressID": 881, "customerID": 418 },
        { "addressID": 217, "customerID": 423 },
        { "addressID": 364, "customerID": 130 },
        { "addressID": 392, "customerID": 139 },
        { "addressID": 11, "customerID": 132 },
        { "addressID": 277, "customerID": 322 },
        { "addressID": 942, "customerID": 395 },
        { "addressID": 504, "customerID": 246 },
        { "addressID": 444, "customerID": 65 },
        { "addressID": 253, "customerID": 417 },
        { "addressID": 81, "customerID": 166 },
        { "addressID": 325, "customerID": 192 }]
      );
    });
};