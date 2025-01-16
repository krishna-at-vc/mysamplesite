package com.mysamplesite.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.commons.lang3.StringUtils;

import javax.annotation.PostConstruct;
import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeroBannerModel {

    @ValueMapValue
    private String backgroundImage;

    @ValueMapValue
    private String productImage;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String subtitle;

    @ValueMapValue
    private List<String> ctaButtons;

    @ValueMapValue
    private String logoImage;

    @PostConstruct
    private void init() {
        // Initialization logic if needed
    }

    // Getters with null checks
    public String getBackgroundImage() {
        return StringUtils.isNotEmpty(backgroundImage) ? backgroundImage : StringUtils.EMPTY;
    }

    public String getProductImage() {
        return StringUtils.isNotEmpty(productImage) ? productImage : StringUtils.EMPTY;
    }

    public String getTitle() {
        return StringUtils.isNotEmpty(title) ? title : StringUtils.EMPTY;
    }

    public String getSubtitle() {
        return StringUtils.isNotEmpty(subtitle) ? subtitle : StringUtils.EMPTY;
    }

    public List<String> getCtaButtons() {
        return ctaButtons;
    }

    public String getLogoImage() {
        return StringUtils.isNotEmpty(logoImage) ? logoImage : StringUtils.EMPTY;
    }

    // Helper methods
    public boolean hasContent() {
        return StringUtils.isNotEmpty(title) ||
                StringUtils.isNotEmpty(subtitle) ||
                StringUtils.isNotEmpty(backgroundImage) ||
                StringUtils.isNotEmpty(productImage) ||
                (ctaButtons != null && !ctaButtons.isEmpty()) ||
                StringUtils.isNotEmpty(logoImage);
    }
}