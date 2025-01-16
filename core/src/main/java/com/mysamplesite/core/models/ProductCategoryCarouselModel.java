package com.mysamplesite.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.commons.lang3.StringUtils;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.ArrayList;

@Model(adaptables = { SlingHttpServletRequest.class, Resource.class }, adapters = {
        ProductCategoryCarouselModel.class }, resourceType = {
                ProductCategoryCarouselModel.RESOURCE_TYPE }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ProductCategoryCarouselModel {
    protected static final String RESOURCE_TYPE = "mysamplesite/components/productCategoryCarousel";

    @SlingObject
    private Resource resource;

    @ValueMapValue
    private String title;

    private List<Category> categories;

    @PostConstruct
    private void init() {
        categories = new ArrayList<>();
        Resource categoriesResource = resource.getChild("categories");
        if (categoriesResource != null) {
            for (Resource categoryResource : categoriesResource.getChildren()) {
                Category category = new Category();
                category.setTitle(categoryResource.getValueMap().get("title", String.class));
                category.setDescription(categoryResource.getValueMap().get("description", String.class));
                category.setImage(categoryResource.getValueMap().get("image/fileReference", String.class));
                category.setCtaText(categoryResource.getValueMap().get("ctaText", String.class));
                category.setCtaLink(categoryResource.getValueMap().get("ctaLink", String.class));
                categories.add(category);
            }
        }
    }

    public String getTitle() {
        return title;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public boolean isEmpty() {
        return StringUtils.isBlank(title) && (categories == null || categories.isEmpty());
    }

    public static class Category {
        private String title;
        private String description;
        private String image;
        private String ctaText;
        private String ctaLink;

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getImage() {
            return image;
        }

        public void setImage(String image) {
            this.image = image;
        }

        public String getCtaText() {
            return ctaText;
        }

        public void setCtaText(String ctaText) {
            this.ctaText = ctaText;
        }

        public String getCtaLink() {
            return ctaLink;
        }

        public void setCtaLink(String ctaLink) {
            this.ctaLink = ctaLink;
        }
    }
}