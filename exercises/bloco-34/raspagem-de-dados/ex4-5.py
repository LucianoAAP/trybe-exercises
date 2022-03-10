import requests
from parsel import Selector

response = requests.get(
    'http://books.toscrape.com/catalogue/the-grand-design_405/index.html'
    )
selector = Selector(text=response.text)
title = selector.css('h1::text').get()
price = selector.css('.price_color::text').re_first(r'\d*\.\d{2}')
description = selector.css('#product_description ~ p::text').get()
relative_img_url = selector.css('img::attr(src)').get()
img_url = f'http://books.toscrape.com/catalogue/{relative_img_url}'
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
availability = selector.css(".product_main .availability::text").re_first("\d")
print(title, price, description, img_url, availability, sep=', ')
