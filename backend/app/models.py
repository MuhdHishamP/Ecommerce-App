from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(null=False,max_length=20)
    description = models.CharField(null=False,max_length=100)
    image = models.ImageField(null=False,upload_to="images/")

    def __str__(self):
        return self.name