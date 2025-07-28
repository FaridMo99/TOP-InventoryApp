import pool from "./db.js";

export async function getAllBrandsQuery() {
  const { rows } = await pool.query("SELECT name FROM car_brands");
  return rows;
}

export async function getModelsByBrandQuery(brand) {
  const { rows } = await pool.query(
    `SELECT m.model_name
     FROM car_models AS m
     LEFT JOIN car_brands AS b ON b.brand_id = m.brand_id
     WHERE b.name = $1`,
    [brand]
  );
  return rows;
}

export async function getCarByModel(model) {
  const { rows } = await pool.query(
    `
    SELECT c.year, c.color, c.mileage, c.price, c.available, m.brand_id,m.model_name
    FROM cars AS c
    LEFT JOIN car_models AS m ON c.model_id = m.model_id
    LEFT JOIN car_brands AS b ON b.brand_id = m.brand_id
    WHERE m.model_name = $1
  `,
    [model]
  );

  return rows;
}

export async function addBrand(brand) {
  const { rows } = await pool.query(
    `INSERT INTO car_brands("name")
     VALUES ($1)
     RETURNING *`,
    [brand]
  );

  return rows[0];
}

export async function removeBrand(brand) {
  await pool.query(
    `DELETE FROM car_brands as c
     WHERE c.name = $1`,
    [brand]
  );
}