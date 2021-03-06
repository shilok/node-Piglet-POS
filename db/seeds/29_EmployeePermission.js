
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('EmployeePermission').del()
    .then(function () {
      // Inserts seed entries
      return knex('EmployeePermission').insert([{ "permissionID": 3, "employeeID": 41 },
      { "permissionID": 2, "employeeID": 60 },
      { "permissionID": 1, "employeeID": 28 },
      { "permissionID": 1, "employeeID": 380 },
      { "permissionID": 3, "employeeID": 43 },
      { "permissionID": 1, "employeeID": 275 },
      { "permissionID": 1, "employeeID": 103 },
      { "permissionID": 3, "employeeID": 440 },
      { "permissionID": 3, "employeeID": 388 },
      { "permissionID": 1, "employeeID": 161 },
      { "permissionID": 1, "employeeID": 420 },
      { "permissionID": 3, "employeeID": 287 },
      { "permissionID": 3, "employeeID": 29 },
      { "permissionID": 3, "employeeID": 431 },
      { "permissionID": 3, "employeeID": 162 },
      { "permissionID": 3, "employeeID": 435 },
      { "permissionID": 2, "employeeID": 39 },
      { "permissionID": 3, "employeeID": 289 },
      { "permissionID": 3, "employeeID": 280 },
      { "permissionID": 1, "employeeID": 434 },
      { "permissionID": 3, "employeeID": 288 },
      { "permissionID": 3, "employeeID": 299 },
      { "permissionID": 3, "employeeID": 331 },
      { "permissionID": 2, "employeeID": 475 },
      { "permissionID": 1, "employeeID": 280 },
      { "permissionID": 1, "employeeID": 416 },
      { "permissionID": 1, "employeeID": 36 },
      { "permissionID": 1, "employeeID": 7 },
      { "permissionID": 1, "employeeID": 223 },
      { "permissionID": 1, "employeeID": 208 },
      { "permissionID": 2, "employeeID": 483 },
      { "permissionID": 1, "employeeID": 457 },
      { "permissionID": 1, "employeeID": 92 },
      { "permissionID": 1, "employeeID": 21 },
      { "permissionID": 2, "employeeID": 319 },
      { "permissionID": 3, "employeeID": 135 },
      { "permissionID": 1, "employeeID": 358 },
      { "permissionID": 2, "employeeID": 297 },
      { "permissionID": 1, "employeeID": 9 },
      { "permissionID": 2, "employeeID": 196 },
      { "permissionID": 3, "employeeID": 418 },
      { "permissionID": 1, "employeeID": 375 },
      { "permissionID": 1, "employeeID": 231 },
      { "permissionID": 3, "employeeID": 467 },
      { "permissionID": 1, "employeeID": 239 },
      { "permissionID": 3, "employeeID": 408 },
      { "permissionID": 3, "employeeID": 486 },
      { "permissionID": 2, "employeeID": 187 },
      { "permissionID": 3, "employeeID": 342 },
      { "permissionID": 3, "employeeID": 206 },
      { "permissionID": 3, "employeeID": 386 },
      { "permissionID": 1, "employeeID": 2 },
      { "permissionID": 2, "employeeID": 255 },
      { "permissionID": 1, "employeeID": 119 },
      { "permissionID": 1, "employeeID": 451 },
      { "permissionID": 3, "employeeID": 458 },
      { "permissionID": 2, "employeeID": 147 },
      { "permissionID": 3, "employeeID": 13 },
      { "permissionID": 3, "employeeID": 336 },
      { "permissionID": 1, "employeeID": 50 },
      { "permissionID": 2, "employeeID": 197 },
      { "permissionID": 2, "employeeID": 234 },
      { "permissionID": 1, "employeeID": 397 },
      { "permissionID": 1, "employeeID": 73 },
      { "permissionID": 2, "employeeID": 88 },
      { "permissionID": 3, "employeeID": 311 },
      { "permissionID": 2, "employeeID": 227 },
      { "permissionID": 3, "employeeID": 473 },
      { "permissionID": 2, "employeeID": 292 },
      { "permissionID": 3, "employeeID": 170 },
      { "permissionID": 2, "employeeID": 491 },
      { "permissionID": 1, "employeeID": 79 },
      { "permissionID": 2, "employeeID": 282 },
      { "permissionID": 2, "employeeID": 454 },
      { "permissionID": 3, "employeeID": 252 },
      { "permissionID": 1, "employeeID": 358 },
      { "permissionID": 2, "employeeID": 401 },
      { "permissionID": 2, "employeeID": 113 },
      { "permissionID": 1, "employeeID": 379 },
      { "permissionID": 1, "employeeID": 90 },
      { "permissionID": 2, "employeeID": 185 },
      { "permissionID": 3, "employeeID": 66 },
      { "permissionID": 2, "employeeID": 270 },
      { "permissionID": 3, "employeeID": 21 },
      { "permissionID": 3, "employeeID": 65 },
      { "permissionID": 2, "employeeID": 101 },
      { "permissionID": 2, "employeeID": 98 },
      { "permissionID": 1, "employeeID": 332 },
      { "permissionID": 2, "employeeID": 387 },
      { "permissionID": 3, "employeeID": 32 },
      { "permissionID": 1, "employeeID": 190 },
      { "permissionID": 1, "employeeID": 90 },
      { "permissionID": 3, "employeeID": 338 },
      { "permissionID": 3, "employeeID": 444 },
      { "permissionID": 3, "employeeID": 371 },
      { "permissionID": 1, "employeeID": 263 },
      { "permissionID": 2, "employeeID": 289 },
      { "permissionID": 1, "employeeID": 83 },
      { "permissionID": 2, "employeeID": 375 },
      { "permissionID": 1, "employeeID": 331 },
      { "permissionID": 3, "employeeID": 451 },
      { "permissionID": 2, "employeeID": 101 },
      { "permissionID": 2, "employeeID": 486 },
      { "permissionID": 1, "employeeID": 37 },
      { "permissionID": 1, "employeeID": 150 },
      { "permissionID": 2, "employeeID": 54 },
      { "permissionID": 2, "employeeID": 320 },
      { "permissionID": 1, "employeeID": 343 },
      { "permissionID": 3, "employeeID": 160 },
      { "permissionID": 2, "employeeID": 260 },
      { "permissionID": 1, "employeeID": 24 },
      { "permissionID": 3, "employeeID": 105 },
      { "permissionID": 2, "employeeID": 400 },
      { "permissionID": 1, "employeeID": 205 },
      { "permissionID": 1, "employeeID": 365 },
      { "permissionID": 1, "employeeID": 214 },
      { "permissionID": 2, "employeeID": 460 },
      { "permissionID": 3, "employeeID": 86 },
      { "permissionID": 1, "employeeID": 201 },
      { "permissionID": 3, "employeeID": 259 },
      { "permissionID": 2, "employeeID": 385 },
      { "permissionID": 2, "employeeID": 247 },
      { "permissionID": 2, "employeeID": 237 },
      { "permissionID": 1, "employeeID": 448 },
      { "permissionID": 1, "employeeID": 55 },
      { "permissionID": 3, "employeeID": 55 },
      { "permissionID": 2, "employeeID": 62 },
      { "permissionID": 2, "employeeID": 147 },
      { "permissionID": 1, "employeeID": 202 },
      { "permissionID": 2, "employeeID": 500 },
      { "permissionID": 1, "employeeID": 335 },
      { "permissionID": 3, "employeeID": 178 },
      { "permissionID": 1, "employeeID": 395 },
      { "permissionID": 2, "employeeID": 386 },
      { "permissionID": 1, "employeeID": 449 },
      { "permissionID": 1, "employeeID": 1 },
      { "permissionID": 3, "employeeID": 11 },
      { "permissionID": 3, "employeeID": 169 },
      { "permissionID": 1, "employeeID": 231 },
      { "permissionID": 1, "employeeID": 267 },
      { "permissionID": 3, "employeeID": 61 },
      { "permissionID": 3, "employeeID": 26 },
      { "permissionID": 1, "employeeID": 243 },
      { "permissionID": 3, "employeeID": 145 },
      { "permissionID": 3, "employeeID": 429 },
      { "permissionID": 3, "employeeID": 50 },
      { "permissionID": 2, "employeeID": 55 },
      { "permissionID": 2, "employeeID": 309 },
      { "permissionID": 1, "employeeID": 162 },
      { "permissionID": 1, "employeeID": 260 },
      { "permissionID": 3, "employeeID": 161 },
      { "permissionID": 2, "employeeID": 268 },
      { "permissionID": 1, "employeeID": 346 },
      { "permissionID": 3, "employeeID": 12 },
      { "permissionID": 2, "employeeID": 264 },
      { "permissionID": 2, "employeeID": 221 },
      { "permissionID": 2, "employeeID": 309 },
      { "permissionID": 2, "employeeID": 286 },
      { "permissionID": 2, "employeeID": 371 },
      { "permissionID": 1, "employeeID": 439 },
      { "permissionID": 2, "employeeID": 369 },
      { "permissionID": 1, "employeeID": 368 },
      { "permissionID": 2, "employeeID": 326 },
      { "permissionID": 1, "employeeID": 93 },
      { "permissionID": 1, "employeeID": 477 },
      { "permissionID": 1, "employeeID": 103 },
      { "permissionID": 1, "employeeID": 374 },
      { "permissionID": 2, "employeeID": 290 },
      { "permissionID": 1, "employeeID": 66 },
      { "permissionID": 2, "employeeID": 434 },
      { "permissionID": 2, "employeeID": 91 },
      { "permissionID": 3, "employeeID": 55 },
      { "permissionID": 3, "employeeID": 255 },
      { "permissionID": 3, "employeeID": 373 },
      { "permissionID": 2, "employeeID": 260 },
      { "permissionID": 2, "employeeID": 241 },
      { "permissionID": 1, "employeeID": 17 },
      { "permissionID": 1, "employeeID": 337 },
      { "permissionID": 2, "employeeID": 471 },
      { "permissionID": 1, "employeeID": 326 },
      { "permissionID": 2, "employeeID": 398 },
      { "permissionID": 3, "employeeID": 403 },
      { "permissionID": 2, "employeeID": 393 },
      { "permissionID": 1, "employeeID": 446 },
      { "permissionID": 2, "employeeID": 343 },
      { "permissionID": 2, "employeeID": 212 },
      { "permissionID": 3, "employeeID": 419 },
      { "permissionID": 1, "employeeID": 345 },
      { "permissionID": 2, "employeeID": 40 },
      { "permissionID": 1, "employeeID": 246 },
      { "permissionID": 3, "employeeID": 484 },
      { "permissionID": 2, "employeeID": 339 },
      { "permissionID": 1, "employeeID": 265 },
      { "permissionID": 2, "employeeID": 45 },
      { "permissionID": 2, "employeeID": 7 },
      { "permissionID": 1, "employeeID": 349 },
      { "permissionID": 3, "employeeID": 322 },
      { "permissionID": 2, "employeeID": 244 },
      { "permissionID": 1, "employeeID": 155 },
      { "permissionID": 1, "employeeID": 153 },
      { "permissionID": 1, "employeeID": 11 },
      { "permissionID": 2, "employeeID": 60 },
      { "permissionID": 1, "employeeID": 29 },
      { "permissionID": 2, "employeeID": 69 },
      { "permissionID": 3, "employeeID": 209 },
      { "permissionID": 3, "employeeID": 136 },
      { "permissionID": 2, "employeeID": 319 },
      { "permissionID": 3, "employeeID": 423 },
      { "permissionID": 3, "employeeID": 478 },
      { "permissionID": 1, "employeeID": 110 },
      { "permissionID": 2, "employeeID": 240 },
      { "permissionID": 3, "employeeID": 349 },
      { "permissionID": 2, "employeeID": 310 },
      { "permissionID": 2, "employeeID": 378 },
      { "permissionID": 2, "employeeID": 443 },
      { "permissionID": 1, "employeeID": 420 },
      { "permissionID": 2, "employeeID": 421 },
      { "permissionID": 3, "employeeID": 388 },
      { "permissionID": 2, "employeeID": 116 },
      { "permissionID": 3, "employeeID": 469 },
      { "permissionID": 1, "employeeID": 40 },
      { "permissionID": 3, "employeeID": 133 },
      { "permissionID": 2, "employeeID": 90 },
      { "permissionID": 2, "employeeID": 28 },
      { "permissionID": 1, "employeeID": 110 },
      { "permissionID": 1, "employeeID": 285 },
      { "permissionID": 3, "employeeID": 224 },
      { "permissionID": 1, "employeeID": 428 },
      { "permissionID": 3, "employeeID": 372 },
      { "permissionID": 2, "employeeID": 475 },
      { "permissionID": 3, "employeeID": 62 },
      { "permissionID": 2, "employeeID": 47 },
      { "permissionID": 1, "employeeID": 425 },
      { "permissionID": 2, "employeeID": 48 },
      { "permissionID": 3, "employeeID": 347 },
      { "permissionID": 2, "employeeID": 28 },
      { "permissionID": 2, "employeeID": 226 },
      { "permissionID": 3, "employeeID": 188 },
      { "permissionID": 2, "employeeID": 101 },
      { "permissionID": 3, "employeeID": 32 },
      { "permissionID": 3, "employeeID": 171 },
      { "permissionID": 1, "employeeID": 426 },
      { "permissionID": 3, "employeeID": 336 },
      { "permissionID": 1, "employeeID": 382 },
      { "permissionID": 2, "employeeID": 90 },
      { "permissionID": 3, "employeeID": 493 },
      { "permissionID": 3, "employeeID": 191 },
      { "permissionID": 2, "employeeID": 164 },
      { "permissionID": 3, "employeeID": 381 },
      { "permissionID": 2, "employeeID": 313 },
      { "permissionID": 2, "employeeID": 123 },
      { "permissionID": 3, "employeeID": 258 },
      { "permissionID": 2, "employeeID": 245 },
      { "permissionID": 3, "employeeID": 210 },
      { "permissionID": 1, "employeeID": 246 },
      { "permissionID": 2, "employeeID": 150 },
      { "permissionID": 2, "employeeID": 273 },
      { "permissionID": 2, "employeeID": 487 },
      { "permissionID": 1, "employeeID": 154 },
      { "permissionID": 2, "employeeID": 154 },
      { "permissionID": 3, "employeeID": 332 },
      { "permissionID": 3, "employeeID": 45 },
      { "permissionID": 3, "employeeID": 250 },
      { "permissionID": 1, "employeeID": 414 },
      { "permissionID": 3, "employeeID": 408 },
      { "permissionID": 2, "employeeID": 99 },
      { "permissionID": 1, "employeeID": 356 },
      { "permissionID": 1, "employeeID": 379 },
      { "permissionID": 2, "employeeID": 189 },
      { "permissionID": 3, "employeeID": 209 },
      { "permissionID": 3, "employeeID": 359 },
      { "permissionID": 2, "employeeID": 269 },
      { "permissionID": 2, "employeeID": 201 },
      { "permissionID": 1, "employeeID": 413 },
      { "permissionID": 3, "employeeID": 189 },
      { "permissionID": 3, "employeeID": 367 },
      { "permissionID": 1, "employeeID": 21 },
      { "permissionID": 3, "employeeID": 202 },
      { "permissionID": 3, "employeeID": 260 },
      { "permissionID": 1, "employeeID": 398 },
      { "permissionID": 2, "employeeID": 477 },
      { "permissionID": 3, "employeeID": 55 },
      { "permissionID": 1, "employeeID": 439 },
      { "permissionID": 2, "employeeID": 493 },
      { "permissionID": 3, "employeeID": 159 },
      { "permissionID": 2, "employeeID": 273 },
      { "permissionID": 1, "employeeID": 220 },
      { "permissionID": 1, "employeeID": 235 },
      { "permissionID": 2, "employeeID": 212 },
      { "permissionID": 2, "employeeID": 303 },
      { "permissionID": 3, "employeeID": 374 },
      { "permissionID": 3, "employeeID": 231 },
      { "permissionID": 2, "employeeID": 55 },
      { "permissionID": 1, "employeeID": 213 },
      { "permissionID": 2, "employeeID": 194 },
      { "permissionID": 3, "employeeID": 22 },
      { "permissionID": 2, "employeeID": 473 },
      { "permissionID": 2, "employeeID": 443 },
      { "permissionID": 1, "employeeID": 91 },
      { "permissionID": 3, "employeeID": 360 },
      { "permissionID": 1, "employeeID": 403 },
      { "permissionID": 3, "employeeID": 312 },
      { "permissionID": 2, "employeeID": 218 },
      { "permissionID": 2, "employeeID": 59 },
      { "permissionID": 2, "employeeID": 80 },
      { "permissionID": 3, "employeeID": 410 },
      { "permissionID": 2, "employeeID": 157 },
      { "permissionID": 3, "employeeID": 174 },
      { "permissionID": 3, "employeeID": 285 },
      { "permissionID": 2, "employeeID": 273 },
      { "permissionID": 2, "employeeID": 181 },
      { "permissionID": 3, "employeeID": 447 },
      { "permissionID": 2, "employeeID": 459 },
      { "permissionID": 3, "employeeID": 421 },
      { "permissionID": 3, "employeeID": 307 },
      { "permissionID": 2, "employeeID": 266 },
      { "permissionID": 2, "employeeID": 369 },
      { "permissionID": 1, "employeeID": 284 },
      { "permissionID": 2, "employeeID": 447 },
      { "permissionID": 1, "employeeID": 306 },
      { "permissionID": 1, "employeeID": 145 },
      { "permissionID": 1, "employeeID": 7 },
      { "permissionID": 1, "employeeID": 488 },
      { "permissionID": 3, "employeeID": 138 },
      { "permissionID": 3, "employeeID": 26 },
      { "permissionID": 2, "employeeID": 360 },
      { "permissionID": 2, "employeeID": 240 },
      { "permissionID": 1, "employeeID": 167 },
      { "permissionID": 1, "employeeID": 175 },
      { "permissionID": 3, "employeeID": 279 },
      { "permissionID": 1, "employeeID": 388 },
      { "permissionID": 2, "employeeID": 223 },
      { "permissionID": 3, "employeeID": 481 },
      { "permissionID": 3, "employeeID": 250 },
      { "permissionID": 2, "employeeID": 444 },
      { "permissionID": 2, "employeeID": 476 },
      { "permissionID": 3, "employeeID": 459 },
      { "permissionID": 1, "employeeID": 78 },
      { "permissionID": 1, "employeeID": 347 },
      { "permissionID": 1, "employeeID": 494 },
      { "permissionID": 1, "employeeID": 489 },
      { "permissionID": 1, "employeeID": 469 },
      { "permissionID": 1, "employeeID": 78 },
      { "permissionID": 2, "employeeID": 320 },
      { "permissionID": 2, "employeeID": 367 },
      { "permissionID": 2, "employeeID": 216 },
      { "permissionID": 1, "employeeID": 116 },
      { "permissionID": 3, "employeeID": 359 },
      { "permissionID": 1, "employeeID": 461 },
      { "permissionID": 2, "employeeID": 26 },
      { "permissionID": 1, "employeeID": 306 },
      { "permissionID": 1, "employeeID": 169 },
      { "permissionID": 2, "employeeID": 182 },
      { "permissionID": 2, "employeeID": 62 },
      { "permissionID": 2, "employeeID": 17 },
      { "permissionID": 3, "employeeID": 3 },
      { "permissionID": 1, "employeeID": 259 },
      { "permissionID": 2, "employeeID": 325 },
      { "permissionID": 2, "employeeID": 115 },
      { "permissionID": 2, "employeeID": 325 },
      { "permissionID": 1, "employeeID": 399 },
      { "permissionID": 1, "employeeID": 78 },
      { "permissionID": 3, "employeeID": 65 },
      { "permissionID": 3, "employeeID": 169 },
      { "permissionID": 3, "employeeID": 233 },
      { "permissionID": 2, "employeeID": 365 },
      { "permissionID": 3, "employeeID": 266 },
      { "permissionID": 1, "employeeID": 19 },
      { "permissionID": 3, "employeeID": 137 },
      { "permissionID": 3, "employeeID": 403 },
      { "permissionID": 1, "employeeID": 56 },
      { "permissionID": 3, "employeeID": 194 },
      { "permissionID": 1, "employeeID": 391 },
      { "permissionID": 3, "employeeID": 118 },
      { "permissionID": 3, "employeeID": 326 },
      { "permissionID": 3, "employeeID": 346 },
      { "permissionID": 1, "employeeID": 117 },
      { "permissionID": 1, "employeeID": 401 },
      { "permissionID": 1, "employeeID": 373 },
      { "permissionID": 3, "employeeID": 104 },
      { "permissionID": 3, "employeeID": 9 },
      { "permissionID": 1, "employeeID": 291 },
      { "permissionID": 2, "employeeID": 97 },
      { "permissionID": 1, "employeeID": 283 },
      { "permissionID": 3, "employeeID": 94 },
      { "permissionID": 3, "employeeID": 196 },
      { "permissionID": 3, "employeeID": 10 },
      { "permissionID": 1, "employeeID": 454 },
      { "permissionID": 2, "employeeID": 439 },
      { "permissionID": 3, "employeeID": 117 },
      { "permissionID": 3, "employeeID": 322 },
      { "permissionID": 2, "employeeID": 289 },
      { "permissionID": 2, "employeeID": 404 },
      { "permissionID": 1, "employeeID": 473 },
      { "permissionID": 1, "employeeID": 60 },
      { "permissionID": 2, "employeeID": 183 },
      { "permissionID": 1, "employeeID": 252 },
      { "permissionID": 2, "employeeID": 203 },
      { "permissionID": 2, "employeeID": 320 },
      { "permissionID": 1, "employeeID": 23 },
      { "permissionID": 2, "employeeID": 70 },
      { "permissionID": 3, "employeeID": 444 },
      { "permissionID": 1, "employeeID": 28 },
      { "permissionID": 3, "employeeID": 18 },
      { "permissionID": 1, "employeeID": 179 },
      { "permissionID": 3, "employeeID": 267 },
      { "permissionID": 3, "employeeID": 475 },
      { "permissionID": 2, "employeeID": 376 },
      { "permissionID": 1, "employeeID": 44 },
      { "permissionID": 1, "employeeID": 312 },
      { "permissionID": 1, "employeeID": 107 },
      { "permissionID": 2, "employeeID": 282 },
      { "permissionID": 3, "employeeID": 370 },
      { "permissionID": 3, "employeeID": 216 },
      { "permissionID": 2, "employeeID": 313 },
      { "permissionID": 2, "employeeID": 69 },
      { "permissionID": 1, "employeeID": 432 },
      { "permissionID": 2, "employeeID": 339 },
      { "permissionID": 2, "employeeID": 414 },
      { "permissionID": 1, "employeeID": 40 },
      { "permissionID": 2, "employeeID": 425 },
      { "permissionID": 1, "employeeID": 214 },
      { "permissionID": 2, "employeeID": 212 },
      { "permissionID": 1, "employeeID": 464 },
      { "permissionID": 3, "employeeID": 410 },
      { "permissionID": 1, "employeeID": 133 },
      { "permissionID": 2, "employeeID": 136 },
      { "permissionID": 2, "employeeID": 231 },
      { "permissionID": 2, "employeeID": 354 },
      { "permissionID": 1, "employeeID": 87 },
      { "permissionID": 3, "employeeID": 465 },
      { "permissionID": 1, "employeeID": 491 },
      { "permissionID": 1, "employeeID": 110 },
      { "permissionID": 1, "employeeID": 109 },
      { "permissionID": 1, "employeeID": 461 },
      { "permissionID": 1, "employeeID": 192 },
      { "permissionID": 2, "employeeID": 158 },
      { "permissionID": 2, "employeeID": 292 },
      { "permissionID": 1, "employeeID": 274 },
      { "permissionID": 3, "employeeID": 322 },
      { "permissionID": 2, "employeeID": 461 },
      { "permissionID": 3, "employeeID": 126 },
      { "permissionID": 2, "employeeID": 92 },
      { "permissionID": 1, "employeeID": 219 },
      { "permissionID": 1, "employeeID": 433 },
      { "permissionID": 1, "employeeID": 56 },
      { "permissionID": 1, "employeeID": 285 },
      { "permissionID": 2, "employeeID": 242 },
      { "permissionID": 2, "employeeID": 31 },
      { "permissionID": 2, "employeeID": 383 },
      { "permissionID": 2, "employeeID": 94 },
      { "permissionID": 1, "employeeID": 252 },
      { "permissionID": 2, "employeeID": 205 },
      { "permissionID": 2, "employeeID": 348 },
      { "permissionID": 2, "employeeID": 21 },
      { "permissionID": 2, "employeeID": 474 },
      { "permissionID": 2, "employeeID": 288 },
      { "permissionID": 1, "employeeID": 126 },
      { "permissionID": 2, "employeeID": 107 },
      { "permissionID": 2, "employeeID": 348 },
      { "permissionID": 2, "employeeID": 217 },
      { "permissionID": 3, "employeeID": 353 },
      { "permissionID": 2, "employeeID": 330 },
      { "permissionID": 1, "employeeID": 390 },
      { "permissionID": 1, "employeeID": 379 },
      { "permissionID": 3, "employeeID": 25 },
      { "permissionID": 2, "employeeID": 98 },
      { "permissionID": 2, "employeeID": 362 },
      { "permissionID": 3, "employeeID": 428 },
      { "permissionID": 3, "employeeID": 56 },
      { "permissionID": 2, "employeeID": 50 },
      { "permissionID": 2, "employeeID": 21 },
      { "permissionID": 3, "employeeID": 293 },
      { "permissionID": 1, "employeeID": 271 },
      { "permissionID": 3, "employeeID": 403 },
      { "permissionID": 3, "employeeID": 400 },
      { "permissionID": 3, "employeeID": 34 },
      { "permissionID": 2, "employeeID": 188 },
      { "permissionID": 3, "employeeID": 134 },
      { "permissionID": 2, "employeeID": 18 },
      { "permissionID": 2, "employeeID": 245 },
      { "permissionID": 1, "employeeID": 386 },
      { "permissionID": 1, "employeeID": 351 },
      { "permissionID": 1, "employeeID": 281 },
      { "permissionID": 2, "employeeID": 357 },
      { "permissionID": 3, "employeeID": 243 },
      { "permissionID": 2, "employeeID": 378 },
      { "permissionID": 3, "employeeID": 137 },
      { "permissionID": 3, "employeeID": 196 },
      { "permissionID": 1, "employeeID": 326 },
      { "permissionID": 2, "employeeID": 184 },
      { "permissionID": 3, "employeeID": 462 },
      { "permissionID": 1, "employeeID": 170 },
      { "permissionID": 2, "employeeID": 370 },
      { "permissionID": 2, "employeeID": 448 },
      { "permissionID": 1, "employeeID": 255 },
      { "permissionID": 2, "employeeID": 306 },
      { "permissionID": 1, "employeeID": 318 },
      { "permissionID": 1, "employeeID": 360 },
      { "permissionID": 1, "employeeID": 305 }]);
    });
};
