import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="sql_intro",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

if connection.open:
    print("the connection is opened")

with connection.cursor() as cursor:
    query = '''CREATE TABLE categories( 
        category INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        category_name VARCHAR(20) 
        )'''

    cursor.execute(query)

with connection.cursor() as cursor:
    query = '''CREATE TABLE products( 
        item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        item_price INT, 
        item_name VARCHAR(20), 
        item_category INT, 
        FOREIGN KEY(item_category) REFERENCES categories(category) 
        )'''


    cursor.execute(query)


with connection.cursor() as cursor:
    query = '''INSERT INTO categories VALUES(%s, %s);'''
    val = [("1", "garden"),
            ("2", "home"),
            ("3", "office")]


    cursor.executemany(query, val)
    connection.commit()

with connection.cursor() as cursor:
    query = "INSERT INTO products VALUES(%s, %s, %s, %s)"
    val = [("1", "100", "flowerpot", "1"),
        ("2", "200", "pan", "2"),
        ("3", "300", "chair", "3")]

    cursor.executemany(query, val)
    connection.commit()

with connection.cursor() as cursor:
    category = "office"
    query = f"""
        SELECT item_name, item_price
        FROM products P JOIN categories C on P.item_category = C.category
        WHERE C.category_name = "{category}"
    """

    cursor.execute(query)
    result = cursor.fetchall()
    print(result)

with connection.cursor() as cursor:
    item_id = 2
    query = f"""
        SELECT *
        FROM products
        WHERE item_id = {item_id}
    """

    cursor.execute(query)
    result = cursor.fetchall()
    print(result)
